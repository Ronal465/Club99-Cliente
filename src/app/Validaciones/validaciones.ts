export class Validaciones {

  constructor() {}

  validarEmail(CorreoElectronico: any): any {
    if (CorreoElectronico.errors != null) {
      if (CorreoElectronico.errors.required) {
        return 'Este campo es requerido';
      }else if (CorreoElectronico.errors.pattern) {
        return 'Este campo debe ser de tipo email';
      }
    }else {
      return null;
    }
  }

  validarContrasena(Contrasena: any): any {
    if (Contrasena.errors != null) {
      if (Contrasena.errors.required) {
        return 'Este campo es requerido';
      }
    }else {
      return null;
    }
  }
}
