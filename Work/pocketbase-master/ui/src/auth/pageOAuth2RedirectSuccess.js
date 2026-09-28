export function pageOAuth2RedirectSuccess(route) {
    app.store.title = app.tr("OAuth2 auth completed");

    window.close();

    return t.div(
        { pbEvent: "pageOAuth2RedirectSuccess", className: "page" },
        t.div(
            { className: "page-content" },
            t.header(
                { className: "txt-center p-base" },
                t.h3({ className: "primary-heading m-b-sm" }, () => app.tr("Auth completed.")),
                t.h6(
                    { className: "secondary-heading" },
                    () => app.tr("You can close this window and go back to the app."),
                ),
            ),
        ),
    );
}
