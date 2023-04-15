import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  api = 'http://localhost:8080/user';

  constructor(private http:HttpClient) {
  }

  getAllUsuarios() {
    return this.http.get<Usuarios[]>(`${this.api}/${'getAll'}`);
  }

  getUsuarios(identificacion: number) {
    return this.http.get<Usuarios>(`${this.api}/findId?identificacion=${identificacion}`);
  }

  updateUsuarios(usuario: Usuarios) {
    return this.http.put<Usuarios>(`${this.api}/${'edit'}`, usuario);
  }

  deleteUsuarios(identificacion: number) {
    return this.http.delete(`${this.api}/remove/${identificacion}`);
  }

  createUsuarios(usuario: Usuarios) {
    return this.http.post(`${this.api}/add`, usuario);
  }

}
