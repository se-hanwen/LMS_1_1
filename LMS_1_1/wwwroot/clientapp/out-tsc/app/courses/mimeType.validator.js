export function mimeTypeValidator() {
    return function (control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            var mimeType = control.value;
            console.log(mimeType.endsWith('jpg'));
            if (!mimeType.endsWith('jpg')) {
                return {
                    isError: true
                };
            }
        }
        return null;
    };
}
//# sourceMappingURL=mimeType.validator.js.map