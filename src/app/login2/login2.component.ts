import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  needsLogin(): boolean {
    return !this.authService.isAuthenticated();
  }

}
