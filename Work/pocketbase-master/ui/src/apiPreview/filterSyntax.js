export function filterSyntax() {
    const data = store({
        show: false,
    });

    return t.div(
        { className: "filter-details m-t-10" },
        t.button(
            {
                type: "button",
                className: "btn secondary sm",
                onclick: () => data.show = !data.show,
            },
            () => {
                if (data.show) {
                    return [
                        t.span({ className: "txt" }, () => app.tr("Hide details")),
                        t.i({ className: "ri-arrow-up-s-line", ariaHidden: true }),
                    ];
                }

                return [
                    t.span({ className: "txt" }, () => app.tr("Show details")),
                    t.i({ className: "ri-arrow-down-s-line", ariaHidden: true }),
                ];
            },
        ),
        app.components.slide(
            () => data.show,
            t.div(
                { className: "block p-t-5" },
                t.p(
                    null,
                    () => app.tr("The filter syntax follows the format "),
                    t.code(
                        null,
                        t.span({ className: "txt-success" }, "OPERAND"),
                        t.span({ className: "txt-danger" }, " OPERATOR "),
                        t.span({ className: "txt-success" }, "OPERAND"),
                    ),
                    () => app.tr(", where:"),
                ),
                t.ul(
                    null,
                    t.li(
                        null,
                        t.span({ className: "txt-code txt-success" }, "OPERAND"),
                        () =>
                            app.tr(
                                " could be any of the above field literal, function, string (single or double quoted), number, null, true, false",
                            ),
                    ),
                    t.li(
                        null,
                        t.span({ className: "txt-code txt-danger" }, "OPERATOR"),
                        () => app.tr(" is one of:"),
                        t.ul(
                            null,
                            t.li(null, t.code({ className: "filter-op" }, "="), () => app.tr(" Equal")),
                            t.li(null, t.code({ className: "filter-op" }, "!="), () => app.tr(" Not equal")),
                            t.li(null, t.code({ className: "filter-op" }, ">"), () => app.tr(" Greater than")),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, ">="),
                                () => app.tr(" Greater than or equal"),
                            ),
                            t.li(null, t.code({ className: "filter-op" }, "<"), () => app.tr(" Less than")),
                            t.li(null, t.code({ className: "filter-op" }, "<="), () => app.tr(" Less than or equal")),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "~"),
                                () => app.tr(" Like/Contains"),
                                t.div(
                                    { className: "txt-sm txt-hint" },
                                    t.em(
                                        null,
                                        () =>
                                            app.tr(
                                                "(auto wraps the right string OPERAND in a \"%\" for wildcard match if not explicitly set)",
                                            ),
                                    ),
                                ),
                            ),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "!~"),
                                () => app.tr(" NOT Like/Contains"),
                                t.div(
                                    { className: "txt-sm txt-hint" },
                                    t.em(
                                        null,
                                        () =>
                                            app.tr(
                                                "(auto wraps the right string OPERAND in a \"%\" for wildcard match if not explicitly set)",
                                            ),
                                    ),
                                ),
                            ),
                            // any/at-least-one-of
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "?="),
                                t.span({ className: "txt-hint" }, () => app.tr(" Any/At-least-one-of")),
                                () => app.tr(" Equal"),
                            ),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "?!="),
                                t.span({ className: "txt-hint" }, () => app.tr(" Any/At-least-one-of")),
                                () => app.tr(" Not equal"),
                            ),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "?>"),
                                t.span({ className: "txt-hint" }, () => app.tr(" Any/At-least-one-of")),
                                () => app.tr(" Greater than"),
                            ),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "?>="),
                                t.span({ className: "txt-hint" }, () => app.tr(" Any/At-least-one-of")),
                                () => app.tr(" Greater than or equal"),
                            ),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "?<"),
                                t.span({ className: "txt-hint" }, () => app.tr(" Any/At-least-one-of")),
                                () => app.tr(" Less than"),
                            ),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "?<="),
                                t.span({ className: "txt-hint" }, () => app.tr(" Any/At-least-one-of")),
                                () => app.tr(" Less than or equal"),
                            ),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "?~"),
                                t.span({ className: "txt-hint" }, () => app.tr(" Any/At-least-one-of")),
                                () => app.tr(" Like/Contains"),
                                t.div(
                                    { className: "txt-sm txt-hint" },
                                    t.em(
                                        null,
                                        () =>
                                            app.tr(
                                                "(auto wraps the right string OPERAND in a \"%\" for wildcard match if not explicitly set)",
                                            ),
                                    ),
                                ),
                            ),
                            t.li(
                                null,
                                t.code({ className: "filter-op" }, "?!~"),
                                t.span({ className: "txt-hint" }, () => app.tr(" Any/At-least-one-of")),
                                () => app.tr(" NOT Like/Contains"),
                                t.div(
                                    { className: "txt-sm txt-hint" },
                                    t.em(
                                        null,
                                        () =>
                                            app.tr(
                                                "(auto wraps the right string OPERAND in a \"%\" for wildcard match if not explicitly set)",
                                            ),
                                    ),
                                ),
                            ),
                        ),
                        t.p(
                            null,
                            () => app.tr("To group and combine several expressions you could use brackets "),
                            t.code(null, "(...)"),
                            () => app.tr(", "),
                            t.code(null, "&&"),
                            () => app.tr(", (AND) and "),
                            t.code(null, "||"),
                            () => app.tr(" (OR) tokens."),
                        ),
                    ),
                ),
            ),
        ),
    );
}
