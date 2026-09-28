export function logLevel(log) {
    return t.div(
        { className: () => `label log-level-label level-${log.level}` },
        t.span({ className: "txt" }, () => {
            return `${app.utils.logLevels[log.level]?.label || app.tr("UNKN")} (${log.level})`;
        }),
    );
}
