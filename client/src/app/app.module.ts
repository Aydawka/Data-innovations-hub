import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
@NgModule({
  declarations: [
    AppComponent,
    FileUploadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
