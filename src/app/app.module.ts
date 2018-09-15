import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupformComponent } from './signupform/signupform.component';
import { NewContactFormComponent } from './new-contact-form/new-contact-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    ContactFormComponent,
    SignupformComponent,
    NewContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
