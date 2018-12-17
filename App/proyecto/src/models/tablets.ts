export class Tablets {
    id: number;
    name: string;
    descripcion: string;
    precio: number ;

    constructor(values: Object = {}) {
         Object.assign(this, values);
    }
 }