import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Files} from "../models/files";



@Injectable({
  providedIn: 'root'
})
export class ClientConnectionService {

  constructor(private readonly http:HttpClient) { }

  public uploadFiles(files: File[]): Observable<string> {

    // Encode the files
    const formData: FormData = new FormData();

    for(let i of files){
      formData.append('file',i);
    }
    return this.http.post<string>("/api/upload", formData, {
      reportProgress: true,
    });
  }


}
