export function pageOAuth2RedirectFailure(route) {
    app.store.title = app.tr("OAuth2 auth failed");

    window.close();

    return t.div(
        { pbEvent: "pageOAuth2RedirectFailure", className: "page" },
        t.div(
            { className: "page-content" },
            t.header(
                { className: "txt-center p-base" },
                t.h3({ className: "primary-heading m-b-sm" }, () => app.tr("Auth failed.")),
                t.h6(
                    { className: "secondary-heading" },
                    () => app.tr("You can close this window and go back to the app to try again."),
                ),
            ),
        ),
    );
}
