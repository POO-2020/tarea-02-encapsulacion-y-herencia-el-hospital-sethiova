import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente {
    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre
        this.fechaNacimiento = new Fecha(fechaNacimiento) 
        this.telefono = telefono
    }
    getPerfil(){
        let telefono = this.telefono
        return(`${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha()}, ${this.telefono}`)
    }
}
