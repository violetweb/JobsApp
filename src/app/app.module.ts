import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from "./app.routing";



import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { JobitemComponent } from './reddit/jobitem.component';
import { JobFormComponent } from './reddit/job-form.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CoverLettersComponent } from './cover-letters/cover-letters.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './toolbar/login.component';
import { ToggleDivDirective } from './helpers/toggle-div.directive';
import { RoundedCheckboxDirective } from './helpers/rounded-checkbox.directive';
import { InlineEditComponent } from './helpers/inline-edit/inline-edit.component';
import { TextareaEditComponent } from './helpers/textarea-edit/textarea-edit.component';
import { ModalComponent } from './helpers/modal/modal.component';





@NgModule({
  declarations: [
    AppComponent,
    RedditComponent,
    JobitemComponent,
    JobFormComponent,
    PageNotFoundComponent,
    HomeComponent,
    CoverLettersComponent,
    ToolbarComponent,
    LoginComponent,
    ToggleDivDirective,
    RoundedCheckboxDirective,
    InlineEditComponent,
    TextareaEditComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
