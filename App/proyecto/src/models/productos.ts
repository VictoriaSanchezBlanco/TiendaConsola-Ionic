export class Productos {
    id: number;
    name: string;
    categoria: string;
    descripcion: string;
    precio: number ;

    constructor(values: Object = {}) {
         Object.assign(this, values);
    }
 }