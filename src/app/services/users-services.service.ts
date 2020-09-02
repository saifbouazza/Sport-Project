import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  usersUrl='api/users';
  constructor(private httpClient:HttpClient) { }
  getAllUsers () {
    return this.httpClient.get(this.usersUrl);
   }
   getUserById(id:number) {
     return this.httpClient.get(`${this.usersUrl}/${id}`);
   }
   deleteUsers(id:number){
     return this.httpClient.delete(`${this.usersUrl}/${id}`);
   }
   addUsers(users:any) {
     return this.httpClient.post(this.usersUrl, users);
   }
   editUsers(users:any){
     return this.httpClient.put(`${this.usersUrl}/${users.id}`, users);
   }
}
