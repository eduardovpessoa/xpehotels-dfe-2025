import { User } from '@angular/fire/auth';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  info : User | null = null;
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
    this.info = this.authService.getCurrentUser();
    console.log(this.info);
  }

  logout(){
    this.authService.logout();
  }
  
}
