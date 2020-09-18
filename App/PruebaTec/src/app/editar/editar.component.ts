import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Servicios/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  private usuario: any = []
  constructor(private usuService: UsuarioService) { 
    this.usuario.push(this.usuService.setUsuEdit()) 
  }

  ngOnInit() {
  }

  private promesaeditar(datos: any)
  {
    return new Promise((resolve,reject)=>
    {
      this.usuService.editar(datos).subscribe((result:any)=>
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

  async editar() {
    let result: any = null
    try {
      result = await this.promesaeditar(this.usuario[0])
      result = result.result
      result = result.info
      alert(result)
    } catch (error) {
      console.log(error)
    }
  }

}
