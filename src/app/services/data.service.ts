import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let matches = [
      { id: 1, teamOne: 'FCB', teamTwo: 'Madrid', scoreOne: 2, scoreTwo: 0 },
      { id: 2, teamOne: 'CA', teamTwo: 'EST', scoreOne: 4, scoreTwo: 1 },
      { id: 3, teamOne: 'CSS', teamTwo: 'Bizerte', scoreOne: 2, scoreTwo: 2 },
      { id: 4, teamOne: 'ATM', teamTwo: 'Bayern', scoreOne: 3, scoreTwo: 1 },
      { id: 4, teamOne: 'Sevilla', teamTwo: 'PSG', scoreOne: 0, scoreTwo: 1 }
    ]

     let players = [
      { id: 1, playerName: 'Messi', age: 12, team: 'Barca' },
      { id: 2, playerName: 'Cristiano', age: 14, team: 'Juv' },
      { id: 3, playerName: 'Neymar', age: 62, team: 'Paris' },
      { id: 4, playerName: 'Pogba', age: 43, team: 'Man u' },
      { id: 4, playerName: 'Zidan', age: 30, team: 'Real' }
    ]
    let users = [
      { id: 1, userName: 'Youssef', lastName: 'youssef' , age: 14, team: 'Barca' },
      { id: 2, userName: 'Yassine', lastName: 'yassine' , age: 11, team: 'Juv' },
      { id: 3, userName: 'Saif', lastName: 'saif' , age: 28, team: 'Paris' },
      { id: 4, userName: 'Slim', lastName: 'slim' , age: 43, team: 'Man u' },
      { id: 4, userName: 'Abderhamen', lastName: 'abderahmen' , age: 30, team: 'Real' }
    ]

    return { players ,matches, users };

  } 
}