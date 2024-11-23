import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

export interface Login {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private dataService = inject(DataService);
  private router = inject(Router);

  loginForm: FormGroup = new FormGroup<Login>({
    email: new FormControl<string | null>('', [Validators.email, Validators.required]),
    password: new FormControl<string | null>('', [Validators.required])
  });

  handleLogin() {
    if (this.loginForm.valid) {
      // Call the login service here
      this.dataService.postMethod('login', this.loginForm.value).subscribe({
        next: (response: any) => {
          window.alert(response.message);
          this.router.navigate(['/main']);
        },
        error: (error) => {
          window.alert(error.error.message);
        }
      })
    }
  }
}
