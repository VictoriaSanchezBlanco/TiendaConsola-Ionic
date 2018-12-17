export class Proveedores {
    id: number;
    name: string;
    nif: string;
    direccion: string;
    sexo: string;
    email: string;
    comentario: string;
    telefono: number;
    movil: number;
    constructor(values: Object = {}) {
         Object.assign(this, values);
    }
 }