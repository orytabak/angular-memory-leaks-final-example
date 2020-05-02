import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn: boolean = false;
  private logoutCallbacks: Array<() => void> = [];

  constructor() {
  }

  public login({username, password}: any, successCallback: () => void, errorCallback: () => void): void {
    (new Observable(subscriber => {
      if (username === "user" && password === "123") {
        this.isLoggedIn = true;
        subscriber.next({username: "user"})
      } else {
        subscriber.error()
      }
    })).subscribe(successCallback, errorCallback);
  }

  public getAuth() {
    return this.isLoggedIn;
  }

  public registerLogoutAction(callback: () => void) {
    this.logoutCallbacks.push(callback);
  }

  public logout() {
    this.isLoggedIn = false;
    this.logoutCallbacks.forEach(cb => {
      cb();
    });
  }
}
