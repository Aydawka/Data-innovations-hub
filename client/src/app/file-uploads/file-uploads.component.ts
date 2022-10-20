import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ClientConnectionService} from "../services/client-connection.service";
import {MessageService} from "primeng/api";
import {catchError, Observable, of, throwError} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {HttpErrorResponse} from "@angular/common/http";
import {Warnings} from "@angular/cli/lib/config/workspace-schema";
import {NgForm} from "@angular/forms";

interface AfterViewInit {
}

@Component({
  selector: 'app-file-uploads',
  templateUrl: './file-uploads.component.html',
  styleUrls: ['./file-uploads.component.css']
})

export class FileUploadsComponent implements AfterViewInit{

  public files: File[] = [];
  public message: string='';
  public error: string ='';

  constructor(
    private messageService: MessageService,
    private readonly clientConnection:ClientConnectionService,
  )  {}

  @ViewChild("uploadForm")
  protected form:NgForm|null=null;

  @ViewChild("filesInput")
  protected input: HTMLInputElement|null=null;

  onFileChange(event: Event){
    let target = event.target as HTMLInputElement;
    this.files = Array.from(target.files ? target.files : []);
    console.log(event);

    this.message='';
    this.error='';
  }

  //sending files to Flask
  public onSubmit(): void{
    if(!this.files.length)
      return;

    this.clientConnection.uploadFiles(this.files)
      .pipe(
        catchError(
          (error) =>
          {
            this.error = this.getServerMessage(error);
            throw error;
          }
        )
      )
      .subscribe(
        (message: string)=>
        {
          this.reset();
          this.message=message;
        }
      )
  }

  //display message if forbidden type of data is entered
  public getServerMessage(error: HttpErrorResponse): string {

    switch (error.status) {
        case 404: {
          return `Not Found: ${error.message}`;
        }
        case 403: {
          return `Access Denied: ${error.message}`;
        }
        case 500: {
          return `Internal Server Error: ${error.message}`;
        }
        case 422: {
          return `${error.error}`;
        }
      }

    let e = error.error instanceof ErrorEvent ? error.error : error;
    return `Unknown Error: ${e.message}`;

  }
// to reset whole system they
  public reset():void{
    this.message='';
    this.error='';

    this.files=[];
    this.form!.resetForm();
    this.input!.value='';
  }

//delete single files
 public delete(file:any){
   const index = this.files.indexOf(file, 0);
   this.files.splice(index, 1);


 }
}
