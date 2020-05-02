import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public showRecords: boolean = false;

  @Output() onShowRecords: EventEmitter<boolean> = new EventEmitter();

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.registerLogoutAction(this.onLogout.bind(this));
  }

  logout(): void {
    this.authService.logout();
  }

  toggleRecords() {
    this.showRecords = !this.showRecords;
    this.onShowRecords.emit(this.showRecords);
  }

  onLogout(): void {
    this.router.navigate(['/']);
  }

}
