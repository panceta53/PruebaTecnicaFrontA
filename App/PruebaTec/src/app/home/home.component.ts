import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';
import { UsuarioService } from '../Servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: any = []

  constructor(private usuService: UsuarioService) { }

  async ngOnInit() {
    this.usuarios = await this.listar()
    console.log(this.usuarios)
  }

  private promesalistar()
  {
    return new Promise((resolve,reject)=>
    {
      this.usuService.listar().subscribe((result:any)=>
      {
        resolve(
          {
            result,resultado:'ok'
          })
      },(error:object)=>
      { reject(
        {
          error,resultado:'error'
        })   
      })
    })
  }

  public async listar()
  {
    let result: any = null
    let usuario: any;
    try
    {
      result = await this.promesalistar()
      result = result.result
      result = result.info
      return result
    }catch(error)
    {
      console.log(error)
      return null
    }
  }

  public editar(id:number)
  {
    this.usuarios.forEach(element => {
      if(id == element.id) {
        this.usuService.getUsuEdit(element)
      }
    });
  }

  private promesaeliminar(id: any)
  {
    return new Promise((resolve,reject)=>
    {
      this.usuService.eliminar(id).subscribe((result:any)=>
      {
        resolve(
          {
            result,resultado:'ok'
          })
      },(error:object)=>
      { reject(
        {
          error,resultado:'error'
        })   
      })
    })
  }

  public async eliminar(id:number)
  {
    const usu = this.usuarios
    let result: any = null
    const dato = {
      usuario_id: id
    }
    console.log(dato)
    try {

      result = await this.promesaeliminar(dato)
      console.log(result)
      this.usuarios.forEach(element => {
        if(id == element.usuario_id) {
          let pos = usu.indexOf(element)
          const eliminado = usu.splice(pos)
        }
      });
    } catch (error) {
      console.log(error)
    }
    

  }

  
}
