export function mimeTypeValidator() {
    return function (control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            var mimeType = control.value;
            //console.log(mimeType.endsWith('png'));
            if (mimeType == null || mimeType == "") {
                var lastdot = mimeType.lastIndexOf(".");
                if (lastdot > -1) {
                    var extention = mimeType.substring(lastdot + 1);
                    var imageext = [
                        "bmp",
                        "cod",
                        "gif",
                        "ief",
                        "jpe",
                        "jpeg",
                        "jpg",
                        "jfif",
                        "svg",
                        "tif",
                        "tiff",
                        "ras",
                        "cmx",
                        "ico",
                        "pnm",
                        "pbm",
                        "pgm",
                        "ppm",
                        "rgb",
                        "xbm",
                        "xpm",
                        "xwd"
                    ];
                    if (!(imageext.includes(extention))) {
                        return {
                            isError: true
                        };
                    }
                }
                /*
                            if (!(mimeType.endsWith('jpg')) || !(mimeType.endsWith('png'))) {
                                return {
                                    isError: true
                                }
                            }
                            */
            }
        }
        return null;
    };
}
//# sourceMappingURL=mimeType.validator.js.map