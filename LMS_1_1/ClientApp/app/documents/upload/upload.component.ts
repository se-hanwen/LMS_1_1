import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../document.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flatten } from '@angular/router/src/utils/collection';
import { AuthService } from 'ClientApp/app/auth/auth.service';


@Component({
  selector: 'doc-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

    @Input() DocumentTypeId: string;
    @Input() DocOwnerId: string;
    @Input() DocOwnerTypeId: string;
    uploadForm: FormGroup;
    isSubmitted = false;
    isTeacher: boolean = false;

    errorMessage: string;
    @ViewChild("fileInput") fileInputVariable: any;
    constructor(private route: ActivatedRoute, private DocumentService: DocumentService, private router: Router, private AuthService: AuthService) { }

    ngOnInit() {
        this.isTeacher = this.AuthService.isTeacher;
       this.uploadForm = new FormGroup({
           name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
           description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
           fileData: new FormControl('', [Validators.required])

        });
    }

    get formControls() { return this.uploadForm.controls; }
   
     
    upload() {
        this.isSubmitted = true;
        if (this.uploadForm.invalid) {
            return;
        }
            let fileToUpload = this.fileInputVariable.nativeElement.files[0];
        let formData = new FormData();
        formData.append('Name', this.uploadForm.value.name);
        formData.append('Description', this.uploadForm.value.description);
        formData.append('DocumentTypeId', this.DocumentTypeId);
        formData.append('DocOwnerTypeId', this.DocOwnerTypeId);
        formData.append('DocOwnerId', this.DocOwnerId);
        formData.append('FileData', fileToUpload);

        this.DocumentService.uploadDocument(formData).subscribe(
            (result) => {
                this.DocumentService.isUploaded(true);
                this.uploadForm.reset();
                this.isSubmitted = false;
            },
            error => this.errorMessage = <any>error
        );
    
    }
}
