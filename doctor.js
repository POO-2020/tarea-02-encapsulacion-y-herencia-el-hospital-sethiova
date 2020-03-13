import Nombre from "./nombre.js"
export default class Doctor {
    /**
     * 
     * @param {string} nombre 
     * @param {string} especialidad 
     * @param {number} telefono 
     * @param {string} cedula 
     */
    constructor(nombre, especialidad, telefono, cedula){
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
        this.cedula = cedula
    }
    getPerfil(){
    return(`${this.cedula}, ${this.especialidad}, ${this.nombre.getNombreCompleto()}, ${this.cedula}`)        
    }
}
