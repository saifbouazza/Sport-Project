import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerServicesService {
  playerUrl='api/players';
  constructor(private httpClient:HttpClient) { }
  
  
  getAllPlayers () {
    return this.httpClient.get(this.playerUrl);
   }
   
   getPlayerById(id:number) {
     return this.httpClient.get(`${this.playerUrl}/${id}`);
   }
   deletePlayer(id:number){
     return this.httpClient.delete(`${this.playerUrl}/${id}`);
   }
   addPlayer(player:any) {
     return this.httpClient.post(this.playerUrl, player);
   }
   editPlayer(player:any){
     return this.httpClient.put(`${this.playerUrl}/${player.id}`, player);
   }
}
