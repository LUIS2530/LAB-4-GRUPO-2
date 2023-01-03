import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { NgForm } from "@angular/forms";

import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { PersonService } from './services/person.service';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {ChartModule} from 'primeng/chart';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    DialogModule,
    ChartModule,
    InputNumberModule,
    InputTextModule,
    NgxToastNotifierModule.forRoot({
      timeOut: 5000,
      bgColors: {
        info: 'red'
      }
    }),
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
