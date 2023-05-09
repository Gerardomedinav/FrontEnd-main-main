export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;    
    acerca_de: string;

    constructor(nombre: string, apellido: string, descripcion: string, img: string, acerca_de: string){
        this.nombre = nombre;
        this.apellido = apellido;       
        this.descripcion = descripcion;
        this.img = img;
        this.acerca_de = acerca_de;
    }
}