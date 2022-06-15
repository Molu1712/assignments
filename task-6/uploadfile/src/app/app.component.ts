import { Component, OnInit } from '@angular/core';
import {  FileItem, FileUploader} from 'ng2-file-upload';
import { FileService } from './file.service';
import {saveAs} from 'file-saver';

const uri = 'http://localhost:3000/file';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
    ngOnInit(): void {
       this.uploader = new FileUploader({url:uri,
            allowedMimeType:['application/pdf','application/msword', "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
            });
        
            this.uploader.onWhenAddingFileFailed=(FileItem:any)=>{
                alert("please choose valid file format");
            }
            this.uploader.onAfterAddingFile = (item:any) => {
                item.remove();
                 if (this.uploader.queue.filter((f:any) => f._file.name == item._file.name).length == 0) {
                 this.uploader.queue.push(item);
                  } 
                 else {
                alert("Please choose different file");
                 }
                };
    }
    uploader:FileUploader|any;
   
    attachmentList:any = [];

    constructor(){
        // this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        //     this.attachmentList.push(JSON.parse(response));
        // }
    }
    
}

