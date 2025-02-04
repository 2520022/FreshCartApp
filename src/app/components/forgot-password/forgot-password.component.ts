import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../core/environments/environments';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnDestroy {
  forgotPasswordForm: FormGroup;
  message: string = '';
  error: string = '';
resetSub!:Subscription
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm(): void {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      this.http.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`, { email }).subscribe({
        next: () => {
          this.message = 'A password reset link has been sent to your email.';
          this.error = '';
          setTimeout(() => this.router.navigate(['/login']), 3000);
        },
        error: () => {
          this.message = '';
          this.error = 'Error sending reset link. Please try again.';
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.resetSub?.unsubscribe();
  }
}
