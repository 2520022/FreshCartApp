import { Component } from '@angular/core';
import { RegisterComponent } from "../../components/register/register.component";
import { LoginComponent } from "../../components/login/login.component";
import { NavAuthComponent } from "../../components/nav-auth/nav-auth.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, NavAuthComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
