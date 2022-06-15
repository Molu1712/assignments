import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {FileUploader, FileUploadModule} from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { FileService } from './file.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatIconModule,
    FileUploadModule,
    FileUploadModule,
    BrowserAnimationsModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
