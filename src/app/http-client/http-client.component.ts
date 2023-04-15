import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuarios } from '../interfaces/usuarios';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
})
export class HttpClientComponent {
  identificacion: number = 0;
  nombre: String = '';
  grupo: String = '';
  listUsuarios: Usuarios[] = [];
  usuario:Usuarios = {
    identificacion: 0,
    nombre: '',
    grupo: '',
  };;

  constructor(private servicio: UsuariosService) {}

  testButton() {
    console.log('test ok');
  }

  getAllUsuarios() {
    this.servicio.getAllUsuarios().subscribe((respuesta) => {
      if (respuesta !== null) {
        this.listUsuarios =  respuesta;
        console.log(respuesta);
      } else {

      }

    });
  }

  getUsuarios() {
    this.servicio.getUsuarios(this.identificacion).subscribe((us) => {
      if (us !== null) {
        this.usuario = us;
        console.log(us);
      }
      console.log("vacio");
    });
  }

  updateUsuarios() {
    const Usuario = {
      identificacion: this.identificacion,
      nombre: this.nombre,
      grupo: this.grupo,
    };
    this.servicio.updateUsuarios(Usuario).subscribe((todo) => {
      console.log(todo);
    });
  }

  deleteUsuarios() {
    this.servicio.deleteUsuarios(this.identificacion).subscribe((data) => {
      console.log(data);
    });
  }

  createUsuarios() {
    const usuario = {
      identificacion: this.identificacion,
      nombre: this.nombre,
      grupo: this.grupo,
    };
    this.servicio.createUsuarios(usuario).subscribe((newUsuarios) => {
      console.log(newUsuarios);
    });
  }
}
