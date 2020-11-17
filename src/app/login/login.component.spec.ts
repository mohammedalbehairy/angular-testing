import { AuthService } from './../services/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('Component - Login', () => {
  let component: LoginComponent;
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
    localStorage.removeItem('token');
  });

  it('needsLogin : should return true if user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('needsLogin : should return false if user is authenticated', () => {
    localStorage.setItem('token', 'test token');
    expect(component.needsLogin()).toBeFalsy();
  });

});
