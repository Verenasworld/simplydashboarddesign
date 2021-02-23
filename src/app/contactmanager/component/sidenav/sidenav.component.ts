import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {UserService} from '../../service/user.service';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

const SMALL_WIDTH_BREAKPOINT = 1200;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
public isScreenSmall: boolean;
users: Observable<User[]>;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.users = this.userService.users;
    this.userService.loadAll();
    this.users.subscribe(data => {
      console.log(data);
    });
  }
}
