window.app = window.app || {};
window.app.components = window.app.components || {};

// note: data is the providerSettingsModal form store
window.app.components.oauth2EndpointFields = function(providerInfo, namePrefix, data, settingsArg = {}) {
    const uniqueId = "endpoints_" + app.utils.randomString();

    const settings = store({
        required: true,
        title: () => app.tr("Provider endpoints"),
    });

    const watchers = app.utils.extendStore(settings, settingsArg);

    return t.div(
        {
            pbEvent: "oauth2Endpoints",
            className: "oauth2-endpoints",
            onunmount: () => {
                watchers.forEach((w) => w?.unwatch());
            },
        },
        t.p(
            { className: "txt-bold" },
            (el) => {
                if (typeof settings.title == "function") {
                    settings.title(el);
                }
                return settings.title;
            },
        ),
        t.div(
            { className: "grid" },
            t.div(
                { className: "col-12" },
                t.div(
                    { className: "field" },
                    t.label({ htmlFor: uniqueId + ".authURL" }, () => app.tr("Auth URL")),
                    t.input({
                        id: uniqueId + ".authURL",
                        name: namePrefix + ".authURL",
                        type: "url",
                        required: () => !!settings.required,
                        value: () => data.config.authURL || "",
                        oninput: (e) => data.config.authURL = e.target.value,
                    }),
                ),
            ),
            t.div(
                { className: "col-12" },
                t.div(
                    { className: "field" },
                    t.label({ htmlFor: uniqueId + ".tokenURL" }, () => app.tr("Token URL")),
                    t.input({
                        id: uniqueId + ".tokenURL",
                        name: namePrefix + ".tokenURL",
                        type: "url",
                        required: () => !!settings.required,
                        value: () => data.config.tokenURL || "",
                        oninput: (e) => data.config.tokenURL = e.target.value,
                    }),
                ),
            ),
            t.div(
                { className: "col-12" },
                t.div(
                    { className: "field" },
                    t.label({ htmlFor: uniqueId + ".userInfoURL" }, () => app.tr("User info URL")),
                    t.input({
                        id: uniqueId + ".userInfoURL",
                        name: namePrefix + ".userInfoURL",
                        type: "url",
                        required: () => !!settings.required,
                        value: () => data.config.userInfoURL || "",
                        oninput: (e) => data.config.userInfoURL = e.target.value,
                    }),
                ),
            ),
        ),
    );
};

window.app.oauth2 = window.app.oauth2 || {};

window.app.oauth2.gitlab = function(providerInfo, namePrefix, data) {
    return app.components.oauth2EndpointFields(
        providerInfo,
        namePrefix,
        data,
        {
            required: false,
            title: () => app.tr("Self-hosted endpoints (optional)"),
        },
    );
};

window.app.oauth2.gitea = function(providerInfo, namePrefix, data) {
    return app.components.oauth2EndpointFields(
        providerInfo,
        namePrefix,
        data,
        {
            required: false,
            title: () => app.tr("Self-hosted endpoints (optional)"),
        },
    );
};

window.app.oauth2.mailcow = function(providerInfo, namePrefix, data) {
    return app.components.oauth2EndpointFields(
        providerInfo,
        namePrefix,
        data,
    );
};
