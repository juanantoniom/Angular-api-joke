import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexServiceService } from './services/index-service.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IndexServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
