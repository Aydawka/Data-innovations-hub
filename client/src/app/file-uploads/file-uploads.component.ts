import { Component, OnInit } from '@angular/core';
import {ClientConnectionService} from "../services/client-connection.service";
import {MessageService} from "primeng/api";
import {catchError, Observable, of, throwError} from "rxjs";
import {Files} from "../models/files";
import {error} from "@angular/compiler-cli/src/transformers/util";

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

  public onSubmit(): void{

    if(!this.files.length)
      return;

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
          this.error = '';
        }
      )
  }

  public reset(){
    let r=this.files=[];
    let s=this.message='';
    let a= this.error=''
    return r||s||a
  }


 public delete(file:any){
   const index = this.files.indexOf(file, 0);
   this.files.splice(index, 1);


 }
}
