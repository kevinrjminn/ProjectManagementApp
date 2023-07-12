import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {RegistrationComponent} from "./components/registration/registration.component";
import {NotificationComponent} from "./components/notification/notification.component";
import {ProjectCreationComponent} from "./components/project-creation/project-creation.component";
import {CollaborationToolsComponent} from "./components/collaboration-tools/collaboration-tools.component";
import {ReportingAnalyticsComponent} from "./components/reporting-analytics/reporting-analytics.component";
import {TaskManagementComponent} from "./components/task-management/task-management.component";
import {TimeTrackingComponent} from "./components/time-tracking/time-tracking.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'register', component: RegistrationComponent},
  {path:'notification', component: Notification},
  {path:'projectCreation',component:ProjectCreationComponent},
  {path:'collaborationTools',component:CollaborationToolsComponent},
  {path:'reportingAnalytics', component:ReportingAnalyticsComponent},
  {path:'taskManagement', component:TaskManagementComponent},
  {path:'timeTracking', component:TimeTrackingComponent},
  {path:'notification', component:NotificationComponent},
  {path:'dashboard', component: DashboardComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//   'path': '': this specifies a path in the Angular application. An empty string as the path
//   refers to the default or root path
//   redirectTo: '/login': this tells the Angular to redirect the user to the '/login' route when the
//   path mathches the one specified above (which is an empty string, meaning the root default route)
//   pathMatch: 'full': This is required for the redirection to work correctly. It tells Angular to only redirect if the entire URL matches the specified path (in this case, an empty string). If you didn't include this, Angular would do the redirection even if the path matched a part of the URL, which can lead to unexpected results.
