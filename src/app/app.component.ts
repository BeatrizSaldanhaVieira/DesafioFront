import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dados: any;
  title="Desafio";

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDados().subscribe(response => {
      this.dados = response;
      console.log('Resposta da API:', this.dados);
    }, error => {
      console.error('Erro ao buscar dados:', error);
    });
  }
}
