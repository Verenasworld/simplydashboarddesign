import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private 'users_': BehaviorSubject<User[]>;
  private dataStore: {
    users: User[]
  };
  constructor(private http: HttpClient) {
    this.dataStore = {users: []};
    this.users_ = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]>{
    return this.users_.asObservable();
  }
  userById(id: number){
    return this.dataStore.users.find(x => x.id === id);
  }
  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(usersUrl)
      .subscribe( data => {
        this.dataStore.users = data;
        this.users_.next(Object.assign({}, this.dataStore).users);
        }, error => {
        console.log('Failes to fetsch users');
      });
  }
}
