import { AuthService } from './../services/auth.service';
import { LoginComponent } from './../login/login.component';

describe('Component - Login2', () => {

  // class MockAuthService {
  //   authenticated = false;

  //   isAuthenticated(): boolean {
  //     return this.authenticated;
  //   }
  // }

  /**
   * extend original service and override it's functions
   */
  class MockAuthService extends AuthService {
    authenticated = false;

    isAuthenticated(): boolean {
      return this.authenticated;
    }
  }

  let component: LoginComponent;
  let service: MockAuthService;



  beforeEach(() => {
    service = new MockAuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
    localStorage.removeItem('token');
  });

  it('fun needsLogin : should return true if user is not authenticated', () => {
    service.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  it('fun needsLogin : should return false if user is authenticated', () => {
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  });

});
