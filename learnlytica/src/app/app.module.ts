import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { CourseComponent } from './components/course/course.component';
import { ServicesComponent } from './components/services/services.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactAddressComponent } from './components/contact-address/contact-address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { DetailsProfileComponent } from './components/details-profile/details-profile.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TitlePipe } from './pipes/title.pipe';
import { BracketPipe } from './pipes/bracket.pipe';
import { ThbsBackgroundDirective } from './directives/thbs-background.directive';
import { TemplateFormComponent } from './components/template-form/template-form.component';

//  import {MatSliderModule} from '@angular/material/slider';
// import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    ListCourseComponent,
    CourseComponent,
    ServicesComponent,
    ListContactComponent,
    NotFoundComponent,
    HomeComponent,
    ContactFormComponent,
    ContactAddressComponent,
    LoginComponent,
    RegisterComponent,
    ListProfilesComponent,
    DetailsProfileComponent,
    ReactiveComponent,
    TitlePipe,
    BracketPipe,
    ThbsBackgroundDirective,
    TemplateFormComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //  MatSliderModule,
    //  MatDialogModule,
     MaterialsModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
