import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';

const routes: Routes = [
  { path: 'empresas', component: EmpresaListComponent },
  { path: 'fornecedores', component: FornecedorFormComponent },
  { path: '', redirectTo: '/empresas', pathMatch: 'full' }, // Redireciona para Empresas por padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
