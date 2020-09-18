import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuEdicion:any

  constructor(private http: HttpClient) { }

  public getUsuEdit(us: any) {
    this.usuEdicion = us
  }

  public setUsuEdit() {
    return this.usuEdicion
  }

  public listar()
  {
    return this.http.get('http://192.168.0.2:3000/listar')
  }

  public editar(datos: any)
  {
    return this.http.post('http://192.168.0.2:3000/editar', datos)
  }

  public eliminar(id: any)
  {
    return this.http.post('http://192.168.0.2:3000/eliminar', id)
  }
}
