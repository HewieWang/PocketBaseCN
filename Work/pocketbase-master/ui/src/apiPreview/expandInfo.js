export function expandInfo() {
    return t.div(
        { className: "api-expand-info" },
        t.p(null, () => app.tr("Auto expand record relations. For example:")),
        app.components.codeBlock({
            value: `?expand=relField1,relField2.subRelField`,
        }),
        t.p(
            null,
            () => app.tr("Supports up to 6-levels depth nested relations expansion."),
            t.br(),
            () => app.tr("The expanded relations will be appended to each individual record under the "),
            t.code(null, "expand"),
            () => app.tr(" property (eg. "),
            t.code(null, `"expand": {"relField1": {...}, ...}`),
            () => app.tr(")."),
        ),
        t.p(
            null,
            () => app.tr("Only the relations to which the request user has permissions to "),
            t.strong(null, () => app.tr("view")),
            () => app.tr(" will be expanded."),
        ),
    );
}
