export let basePredefinedTags = [
    { value: "*:list" },
    { value: "*:view" },
    { value: "*:create" },
    { value: "*:update" },
    { value: "*:delete" },
    { value: "*:file", description: "targets the files download endpoint" },
    { value: "*:listAuthMethods" },
    { value: "*:authRefresh" },
    { value: "*:auth", description: "targets all auth methods" },
    { value: "*:authWithPassword" },
    { value: "*:authWithOAuth2" },
    { value: "*:authWithOTP" },
    { value: "*:requestOTP" },
    { value: "*:requestPasswordReset" },
    { value: "*:confirmPasswordReset" },
    { value: "*:requestVerification" },
    { value: "*:confirmVerification" },
    { value: "*:requestEmailChange" },
    { value: "*:confirmEmailChange" },
];

export function openRateLimitInfoModal() {
    const modal = rateLimitInfoModal();

    document.body.appendChild(modal);

    app.modals.open(modal);
}

function rateLimitInfoModal() {
    return t.div(
        {
            pbEvent: "rateLimitInfoModal",
            className: "modal rate-limit-info-modal",
            onafterclose: (el) => {
                el?.remove();
            },
        },
        t.header({ className: "modal-header" }, t.h5(null, () => app.tr("Rate limit label format"))),
        t.div(
            { className: "modal-content" },
            t.p(
                null,
                () => app.tr("The rate limit rules are resolved in the following order (stops on the first match):"),
            ),
            t.ol(
                null,
                t.li(null, () => app.tr("exact tag (e.g. "), t.code(null, "users:create")),
                t.li(null, () => app.tr("wildcard tag (e.g. "), t.code(null, "*:create")),
                t.li(null, () => app.tr("METHOD + exact path (e.g. "), t.code(null, "POST /a/b")),
                t.li(null, () => app.tr("METHOD + prefix path (e.g. "), t.code(null, "POST /a/b", t.strong(null, "/"))),
                t.li(null, () => app.tr("exact path (e.g. "), t.code(null, "/a/b")),
                t.li(null, () => app.tr("prefix path (e.g. "), t.code(null, "/a/b", t.strong(null, "/"))),
            ),
            t.p(
                null,
                () =>
                    app.tr(
                        "In case of multiple rules with the same label but different target user audience (e.g. \"guest\" vs \"auth\"), only the matching audience rule is taken in consideration.",
                    ),
            ),
            t.hr(),
            t.p(null, () => app.tr("The rate limit label could be in one of the following formats:")),
            t.ul(
                null,
                t.li(
                    { className: "m-b-sm" },
                    t.code(null, "[METHOD ]/my/path"),
                    () => app.tr(" - full exact route match ("),
                    t.strong(null, () => app.tr("must be without trailing slash")),
                    () => app.tr("; \"METHOD\" is optional)."),
                    t.br(),
                    () => app.tr("For example:"),
                    t.ul(
                        { className: "m-0" },
                        t.li(
                            null,
                            t.code(null, "/hello"),
                            () => app.tr(" - matches "),
                            t.code(null, "GET /hello"),
                            ", ",
                            t.code(null, "POST /hello"),
                            () => app.tr(", etc."),
                        ),
                        t.li(
                            null,
                            t.code(null, "POST /hello"),
                            () => app.tr(" - matches only "),
                            t.code(null, "POST /hello"),
                        ),
                    ),
                ),
                t.li(
                    { className: "m-b-sm" },
                    t.code(null, "[METHOD ]/my/prefix", t.strong(null, "/")),
                    () => app.tr(" - path prefix ("),
                    t.strong(null, () => app.tr("must end with trailing slash;")),
                    () => app.tr("\"METHOD\" is optional). For example:"),
                    t.ul(
                        { className: "m-0" },
                        t.li(
                            null,
                            t.code(null, "/hello/"),
                            () => app.tr(" - matches "),
                            t.code(null, "GET /hello"),
                            ", ",
                            t.code(null, "POST /hello/a/b/c"),
                            () => app.tr(", etc."),
                        ),
                        t.li(
                            null,
                            t.code(null, "POST /hello/"),
                            () => app.tr(" - matches "),
                            t.code(null, "POST /hello"),
                            ", ",
                            t.code(null, "POST /hello/a/b/c"),
                            () => app.tr(", etc."),
                        ),
                    ),
                ),
                t.li(
                    { className: "m-b-0" },
                    t.code(null, "collectionName:predefinedTag"),
                    () => app.tr(" - targets a specific action of a single collection."),
                    () => app.tr(" To apply the rule for all collections you can use the "),
                    t.code(null, "*"),
                    () => app.tr(" wildcard. For example:"),
                    t.code(null, "posts:create"),
                    ", ",
                    t.code(null, "users:listAuthMethods"),
                    ", ",
                    t.code(null, "*:auth"),
                    ".",
                    t.br(),
                    () => app.tr("The predifined collection tags are ("),
                    t.em(null, () => app.tr("there should be autocomplete once you start typing")),
                    () => app.tr("):"),
                    t.ul({ className: "m-0" }, () => {
                        return basePredefinedTags.map((tag) => {
                            return t.li(null, tag.value.replace("*:", ":"), () => {
                                if (tag.description) {
                                    return t.em({ className: "txt-hint" }, " (", () => app.tr(tag.description), ")");
                                }
                            });
                        });
                    }),
                ),
            ),
        ),
        t.footer(
            { className: "modal-footer" },
            t.button(
                {
                    type: "button",
                    className: "btn transparent m-r-auto",
                    onclick: () => app.modals.close(),
                },
                t.span({ className: "txt" }, () => app.tr("Close")),
            ),
        ),
    );
}
