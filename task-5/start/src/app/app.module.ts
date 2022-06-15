import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { MapviewComponent } from './mapview/mapview.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchpipePipe,
    MapviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    FormsModule,
    MatIconModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
