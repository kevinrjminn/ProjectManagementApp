import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { CollaborationToolsComponent } from './components/collaboration-tools/collaboration-tools.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ProjectCreationComponent } from './components/project-creation/project-creation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReportingAnalyticsComponent } from './components/reporting-analytics/reporting-analytics.component';
import { TaskManagementComponent } from './components/task-management/task-management.component';
import { TimeTrackingComponent } from './components/time-tracking/time-tracking.component';

import { AuthenticationService } from './services/authentication.service';
import { CollaborationService } from './services/collaboration.service';
import { NotificationService } from './services/notification.service';
import { ProjectService } from './services/project.service';
import { ReportingService } from './services/reporting.service';
import { TaskService } from './services/task.service';
import { TimeLogService } from './services/time-log.service';
// import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {ExtendedModule} from "@angular/flex-layout";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// This is your import
//
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
//
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CollaborationToolsComponent,
    LoginComponent,
    NotificationComponent,
    ProjectCreationComponent,
    RegistrationComponent,
    ReportingAnalyticsComponent,
    TaskManagementComponent,
    TimeTrackingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ExtendedModule
  ],
  providers: [
    AuthenticationService,
    CollaborationService,
    NotificationService,
    ProjectService,
    ReportingService,
    TaskService,
    TimeLogService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
