import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { JsonPipe } from '../json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaListComponent,
    FornecedorFormComponent,
    JsonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
