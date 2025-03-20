import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api/teste'; // Altere para sua API real

  constructor(private http: HttpClient) {}

  getDados(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
