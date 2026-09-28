window.app = window.app || {};
window.app.oauth2 = window.app.oauth2 || {};

// note: data is the providerSettingsModal form store
window.app.oauth2.apple = function(providerInfo, namePrefix, data) {
    const uniqueId = "apple_" + app.utils.randomString();

    return t.div(
        { pbEvent: "oauth2AppleOptions", className: "oauth2-apple-options" },
        t.button(
            {
                type: "button",
                className: "btn sm secondary",
                onclick: () => {
                    app.modals.openAppleSecretGenerator({
                        ongenerate: (secret) => {
                            data.config.clientSecret = secret;
                        },
                    });
                },
            },
            t.i({ className: "ri-key-line", ariaHidden: true }),
            t.span({ className: "txt" }, () => app.tr("Generate secret")),
        ),
    );
};

window.app.modals = window.app.modals || {};

window.app.modals.openAppleSecretGenerator = function(modalSettings = {
    onbeforeopen: null,
    onafteropen: null,
    onbeforeclose: null,
    onafterclose: null,
    ongenerate: null, // (secret) => {}
}) {
    const modal = appleSecretGeneratorModal(modalSettings);
    if (!modal) {
        return;
    }

    document.body.appendChild(modal);

    app.modals.open(modal);
};

function appleSecretGeneratorModal(modalSettings = {}) {
    let modal;

    const uniqueId = "secret_generator_" + app.utils.randomString();

    const maxDuration = 15777000; // 6 months

    const data = store({
        clientId: "",
        teamId: "",
        keyId: "",
        privateKey: "",
        duration: maxDuration,
        isSubmitting: false,
    });

    async function submit() {
        data.isSubmitting = true;

        try {
            const result = await app.pb.settings.generateAppleClientSecret(
                data.clientId,
                data.teamId,
                data.keyId,
                data.privateKey.trim(),
                data.duration,
            );

            data.isSubmitting = false;

            app.toasts.success(app.tr("Successfully generated client secret."));

            modalSettings.ongenerate?.(result.secret);

            app.modals.close(modal);
        } catch (err) {
            if (!err.isAbort) {
                app.checkApiError(err);
                data.isSubmitting = false;
            }
        }
    }

    modal = t.div(
        {
            pbEvent: "appleSecretGeneratorModal",
            className: "modal popup apple-secret-generator-modal",
            onbeforeopen: (el) => {
                return modalSettings.onbeforeopen?.(el);
            },
            onafteropen: (el) => {
                modalSettings.onafteropen?.(el);
            },
            onbeforeclose: (el) => {
                return modalSettings.onbeforeclose?.(el);
            },
            onafterclose: (el) => {
                modalSettings.onafterclose?.(el);
                el?.remove();
            },
        },
        t.header(
            { className: "modal-header" },
            t.h5({ className: "m-auto" }, () => app.tr("Generate Apple client secret")),
        ),
        t.form(
            {
                id: uniqueId + "_form",
                className: "modal-content",
                onsubmit: (e) => {
                    e.preventDefault();
                    submit();
                },
            },
            t.div(
                { className: "grid" },
                t.div(
                    { className: "col-sm-6" },
                    t.div(
                        { className: "field" },
                        t.label({ htmlFor: uniqueId + ".clientId" }, () => app.tr("Client ID")),
                        t.input({
                            id: uniqueId + ".clientId",
                            name: "clientId",
                            type: "text",
                            required: true,
                            value: () => data.clientId || "",
                            oninput: (e) => data.clientId = e.target.value,
                        }),
                    ),
                ),
                t.div(
                    { className: "col-sm-6" },
                    t.div(
                        { className: "field" },
                        t.label({ htmlFor: uniqueId + ".teamId" }, () => app.tr("Team ID")),
                        t.input({
                            id: uniqueId + ".teamId",
                            name: "teamId",
                            type: "text",
                            required: true,
                            value: () => data.teamId || "",
                            oninput: (e) => data.teamId = e.target.value,
                        }),
                    ),
                ),
                t.div(
                    { className: "col-sm-6" },
                    t.div(
                        { className: "field" },
                        t.label({ htmlFor: uniqueId + ".keyId" }, () => app.tr("Key ID")),
                        t.input({
                            id: uniqueId + ".keyId",
                            name: "keyId",
                            type: "text",
                            required: true,
                            value: () => data.keyId || "",
                            oninput: (e) => data.keyId = e.target.value,
                        }),
                    ),
                ),
                t.div(
                    { className: "col-sm-6" },
                    t.div(
                        { className: "field" },
                        t.label({ htmlFor: uniqueId + ".duration" }, () => app.tr("Duration (in seconds)")),
                        t.input({
                            id: uniqueId + ".duration",
                            name: "duration",
                            type: "number",
                            min: 0,
                            step: 1,
                            max: maxDuration,
                            required: true,
                            value: () => data.duration || 0,
                            oninput: (e) => data.duration = parseInt(e.target.value, 10),
                        }),
                    ),
                    t.div(
                        { className: "field-help" },
                        () =>
                            app.tr("Max {maxDuration} seconds (~{months} months).", {
                                maxDuration: maxDuration,
                                months: (maxDuration / (60 * 60 * 24 * 30)) << 0,
                            }),
                    ),
                ),
                t.div(
                    { className: "col-sm-12" },
                    t.div(
                        { className: "field" },
                        t.label({ htmlFor: uniqueId + ".privateKey" }, () => app.tr("Private key")),
                        t.textarea({
                            id: uniqueId + ".privateKey",
                            name: "privateKey",
                            type: "text",
                            required: true,
                            rows: 8,
                            placeholder: "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----",
                            value: () => data.privateKey || "",
                            oninput: (e) => data.privateKey = e.target.value,
                        }),
                    ),
                    t.div(
                        { className: "field-help" },
                        () =>
                            app.tr(
                                "The key is not stored on the server and it is used only for generating the signed JWT.",
                            ),
                    ),
                ),
            ),
        ),
        t.footer(
            { className: "modal-footer" },
            t.button(
                {
                    type: "button",
                    className: "btn transparent m-r-auto",
                    onclick: () => app.modals.close(modal),
                },
                t.span({ className: "txt" }, () => app.tr("Close")),
            ),
            t.button(
                {
                    "html-form": uniqueId + "_form",
                    type: "submit",
                    className: "btn expanded",
                },
                t.i({ className: "ri-key-line", ariaHidden: true }),
                t.span({ className: "txt" }, () => app.tr("Generate secret")),
            ),
        ),
    );

    return modal;
}
