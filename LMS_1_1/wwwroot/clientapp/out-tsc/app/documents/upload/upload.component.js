import * as tslib_1 from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../document.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
var UploadComponent = /** @class */ (function () {
    function UploadComponent(route, DocumentService, router) {
        this.route = route;
        this.DocumentService = DocumentService;
        this.router = router;
        this.isSubmitted = false;
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.uploadForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
            description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
            fileData: new FormControl('', [Validators.required])
        });
    };
    Object.defineProperty(UploadComponent.prototype, "formControls", {
        get: function () { return this.uploadForm.controls; },
        enumerable: true,
        configurable: true
    });
    UploadComponent.prototype.upload = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.uploadForm.invalid) {
            return;
        }
        var fileToUpload = this.fileInputVariable.nativeElement.files[0];
        var formData = new FormData();
        formData.append('Name', this.uploadForm.value.name);
        formData.append('Description', this.uploadForm.value.description);
        formData.append('UploaderId', "ce87a5b9-84d1-46c7-951d-f750e16b4eba");
        formData.append('DocumentTypeId', this.DocumentTypeId);
        formData.append('DocOwnerTypeId', this.DocOwnerTypeId);
        formData.append('DocOwnerId', this.DocOwnerId);
        formData.append('FileData', fileToUpload);
        this.DocumentService.uploadDocument(formData).subscribe(function (result) {
            _this.DocumentService.isUploaded(true);
            _this.uploadForm.reset();
            _this.isSubmitted = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], UploadComponent.prototype, "DocumentTypeId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], UploadComponent.prototype, "DocOwnerId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], UploadComponent.prototype, "DocOwnerTypeId", void 0);
    tslib_1.__decorate([
        ViewChild("fileInput"),
        tslib_1.__metadata("design:type", Object)
    ], UploadComponent.prototype, "fileInputVariable", void 0);
    UploadComponent = tslib_1.__decorate([
        Component({
            selector: 'doc-upload',
            templateUrl: './upload.component.html',
            styleUrls: ['./upload.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, DocumentService, Router])
    ], UploadComponent);
    return UploadComponent;
}());
export { UploadComponent };
//# sourceMappingURL=upload.component.js.map