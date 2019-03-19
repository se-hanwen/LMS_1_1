export function mimeTypeValidator(mimeType) {
    return function (control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            var MIMEtype = mimeType.split("/")[0];
            if (MIMEtype !== "Image") {
                return {
                    isError: true
                };
            }
        }
        return null;
    };
}
//# sourceMappingURL=mimeType.validator.js.map