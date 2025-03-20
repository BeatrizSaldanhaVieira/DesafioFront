import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent {
  fornecedorForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.fornecedorForm = this.fb.group({
      cnpjCpf: ['', [Validators.required]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.fornecedorForm.valid) {
      this.http.post('http://localhost:7242/api/fornecedor', this.fornecedorForm.value).subscribe(() => {
        alert('Fornecedor cadastrado com sucesso!');
        this.fornecedorForm.reset();
      });
    }
  }
}
