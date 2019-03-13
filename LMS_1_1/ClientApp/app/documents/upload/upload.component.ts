import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../document.service';
import { UploadDocumentInfoViewModel } from '../document';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    errorMessage: string;
   
    @ViewChild("fileInput") fileInputVariable: any;
    showMsg: boolean = false;
    constructor(private route: ActivatedRoute, private DocumentService: DocumentService, private router: Router) { }

  ngOnInit() {
  }
    upload(formValues) {

        let fileToUpload = this.fileInputVariable.nativeElement.files[0];
        let formData = new FormData();

        formData.append('Name', formValues.name);
        formData.append('Description', formValues.description);
        formData.append('UploaderId', "ce87a5b9-84d1-46c7-951d-f750e16b4eba");
        formData.append('DocumentTypeId', "2");
        formData.append('DocOwnerTypeId', "1");
        formData.append('DocOwnerId', "20745e8a-8101-463a-295a-08d6a792beb9");
        formData.append('FileData', fileToUpload);
        
       

      
       
        this.DocumentService.uploadDocument(formData).subscribe(
            (result) => {
                this.showMsg = true;
                this.router.navigate(['/courses'])

                console.log(result);
                console.log("Uploaded a Document");
            },
            error => this.errorMessage = <any>error
        );
    }
}
