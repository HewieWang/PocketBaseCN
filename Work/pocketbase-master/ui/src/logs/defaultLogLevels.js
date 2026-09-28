export function defaultLogLevels() {
    return t.div(
        { className: "inline-flex gap-5" },
        t.span(null, () => app.tr("Default log levels:")),
        () => {
            const result = [];

            const sorted = Object.keys(app.utils.logLevels).sort();
            for (const level of sorted) {
                result.push(t.code(null, `${level}:${app.utils.logLevels[level].label}`));
            }

            return result;
        },
    );
}
