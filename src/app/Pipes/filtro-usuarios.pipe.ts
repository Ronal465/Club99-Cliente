import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuarios'
})
export class FiltroUsuariosPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
   
    const resultadoBusqueda = [];
   
      for(const Usuario of value){
        if(Usuario.NumeroIdentificacion.indexOf(arg) > -1){
          resultadoBusqueda.push(Usuario);
        }
      }
      

    return resultadoBusqueda;
    }

}
