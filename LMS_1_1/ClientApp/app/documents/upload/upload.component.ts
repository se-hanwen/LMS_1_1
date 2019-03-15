import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../document.service';

@Component({
  selector: 'doc-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

    @Input() DocumentTypeId: string;
    @Input() DocOwnerId: string;
    @Input() DocOwnerTypeId: string;
  

    errorMessage: string;
    @ViewChild("fileInput") fileInputVariable: any;
    showMsg: boolean = false;
    constructor(private route: ActivatedRoute, private DocumentService: DocumentService, private router: Router) { }

  ngOnInit() {
    }

    /*
    sendMessage(): void {
        // send message to subscribers via observable subject
        this.DocumentService.sendMessage('Message from Home Component to App Component!');
    }*/
    
     
    upload(formValues) {
        let fileToUpload = this.fileInputVariable.nativeElement.files[0];
        let formData = new FormData();
        formData.append('Name', formValues.name);
        formData.append('Description', formValues.description);
        formData.append('UploaderId', "ce87a5b9-84d1-46c7-951d-f750e16b4eba");
        formData.append('DocumentTypeId', this.DocumentTypeId);
        formData.append('DocOwnerTypeId', this.DocOwnerTypeId);
        formData.append('DocOwnerId', this.DocOwnerId);
        formData.append('FileData', fileToUpload);
       
        this.DocumentService.uploadDocument(formData).subscribe(
            (result) => {
                this.DocumentService.isUploaded(true); 
            },
            error => this.errorMessage = <any>error
        );
    }
}
