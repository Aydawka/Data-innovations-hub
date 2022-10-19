import { Component, OnInit } from '@angular/core';
import {ClientConnectionService} from "../services/client-connection.service";
import {MessageService} from "primeng/api";
import {catchError, Observable, of, throwError} from "rxjs";
import {Files} from "../models/files";


@Component({
  selector: 'app-file-uploads',
  templateUrl: './file-uploads.component.html',
  styleUrls: ['./file-uploads.component.css']
})
export class FileUploadsComponent{

  public files: File[] = [];
  public message: string='';
  public error: string ='';

  constructor(
    private messageService: MessageService,
    private readonly clientConnection:ClientConnectionService
  )  {}

  onFileChange(event: Event){
    let target = event.target as HTMLInputElement;
    this.files = Array.from(target.files ? target.files : []);
    console.log(event);
  }

  public onSubmit(){
    this.clientConnection.uploadFiles(this.files)
      .pipe(
        catchError(
          (error) =>
          {
            let e = error.error instanceof ErrorEvent ? error.error : error;
            this.error = e.message;
            console.log(e);
            throw error;
          }
        )
      )
      .subscribe(
        (message: string)=>
        {
          this.message=message;
          console.log(message);
        }
      )
  }

  // public submit(){
  //   this.onSubmit()
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         if (res.status == 200) {
  //           return "success"
  //         }
  //         else {
  //           alert(res.status)
  //         }
  //       },
  //       err => alert(err)
  //     );
  // }


  //primeng
  uploadedFiles: any[] = [];
  //primeng function
  public onUpload(event:any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
//primeng function finishes

}
