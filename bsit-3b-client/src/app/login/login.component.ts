import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

interface Login {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly dataService = inject(DataService);

  loginForm: FormGroup<Login> = new FormGroup<Login>({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  })

  handleLogin() {
    if (this.loginForm.valid) {
      this.dataService.postRequest('login', this.loginForm.value).subscribe({
        next: (response: any) => {
          alert(response.message);
          this.router.navigate(['/main']);
          
          window.sessionStorage.setItem('user', JSON.stringify(response.data));
        },
        error: (error) => {
          console.log(error);
        }
      });

    }
  }
}
