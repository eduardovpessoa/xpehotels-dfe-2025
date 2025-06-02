import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(() => this.router.navigate(['/dashboard']))
      .catch((error) => {
        console.error("Não foi possível fazer login. Erro: ", error);
        alert('Usuário ou senha inválidos! Verifique suas credenciais e tente novamente!');
      });
  }

}
