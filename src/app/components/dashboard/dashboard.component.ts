import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  user = {
    username: '',
    password: '',
  };
  errorMessage: string = '';

  onLogin() {
    // Implement your login logic here.
    console.log(this.user);
  }
}
