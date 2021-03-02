import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {UserService} from '../../service/user.service';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 1200;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
public isScreenSmall: boolean;
users: Observable<User[]>;
isDarkTheme: boolean;

constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router) {
}
    @ViewChild(MatSidenav) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
    this.users = this.userService.users;
    this.userService.loadAll();
    this.router.events.subscribe(() => {
      if (this.isScreenSmall){
        this.sidenav.close();
      }
    });
  }
}
