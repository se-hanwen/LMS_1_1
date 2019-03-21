import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DocumentService } from '../document.service';
import { IDocument } from '../document';
import { saveAs } from 'file-saver';
import { Subscription } from 'rxjs';
import { AuthService } from 'ClientApp/app/auth/auth.service';
import { DataService } from 'ClientApp/app/data.service';
@Component({
  selector: 'upload-detail',
  templateUrl: './upload-detail.component.html',
  styleUrls: ['./upload-detail.component.css']
})
export class UploadDetailComponent implements OnInit,OnDestroy {
    @Input() DocOwnerId: string;
    documents: IDocument[] = [];
    errorMessage: string;
    subscription: Subscription;
    isTeacher: boolean = false;
    today: Data = Date.now();

    constructor(private route: ActivatedRoute,
        private DocumentService: DocumentService,
        private AuthService: AuthService,
        private data: DataService
    ) {


        this.subscription = this.DocumentService.getUplaodtStatus().subscribe(status => {
            if (status) {
                this.loadDocument();
            } 
        });
    }

    ngOnInit() {
        this.isTeacher = this.AuthService.isTeacher;
        this.loadDocument();
    }

    public  loadDocument() {
        this.DocumentService.getDocumentsByOwnerId(this.DocOwnerId).subscribe(
            documents => {
                this.documents = documents;
            },
            error => this.errorMessage = <any>error
        );
    }
    DownLoadFile(fileName: string) {
        this.DocumentService.downloadFile(fileName)
            .subscribe(
                success => {
                    saveAs(success, fileName);
                },
            error => this.errorMessage = <any>error
            );
    }

    DeleteFile(id: string) {
        if (window.confirm('Are you sure, you want to delete?')) {
            this.DocumentService.deleteFileById(id)
                .subscribe(
                success => {
                    this.loadDocument();
                },
                      error => this.errorMessage = <any>error
                );
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
