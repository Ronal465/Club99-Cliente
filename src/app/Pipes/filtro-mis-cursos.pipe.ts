import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroMisCursos'
})
export class FiltroMisCursosPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
   
    const resultadoBusqueda = [];
   
      for(const Curso of value){
        if(Curso.Nombre.indexOf(arg) > -1){
          resultadoBusqueda.push(Curso);
        }
      }
      

    return resultadoBusqueda;
    }

}
