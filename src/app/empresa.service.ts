import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = 'https://localhost:7242/api/empresas'; // Coloque a URL da sua API

  constructor(private http: HttpClient) {}

  getEmpresas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Aqui você pode adicionar métodos para criar, atualizar ou excluir empresas
}
