export class Usuario {
    id: number;
    name: string;
    nif: string;
    direccion: string;
    sexo: string;
    email: string;
    comentario: string;
    telefono: number;
    movil: number;
    username: string;
    password: string;
    constructor(values: Object = {}) {
         Object.assign(this, values);
    }
 }