import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchServicesService {
  matchUrl = 'api/matches';
  constructor(private httpClient: HttpClient) { }

  getAllMatches() {
    return this.httpClient.get(this.matchUrl);
  }

  getMatchById(id: number) {
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }
  deleteMatch(id: number) {
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
  addMatch(match: any) {
    return this.httpClient.post(this.matchUrl, match);
  }
  editMatch(match: any) {
    return this.httpClient.put(`${this.matchUrl}/${match.id}`, match);
  }


}
