import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostItemListComponent } from './components/post-item-list/post-item-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostItemListComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
