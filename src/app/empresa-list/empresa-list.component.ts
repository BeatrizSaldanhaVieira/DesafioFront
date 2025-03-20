import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {
  empresas: any[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas() {
    this.empresaService.getEmpresas().subscribe(
      (data) => {
        this.empresas = data;
      },
      (error) => {
        console.error('Erro ao carregar as empresas:', error);
      }
    );
  }
}
