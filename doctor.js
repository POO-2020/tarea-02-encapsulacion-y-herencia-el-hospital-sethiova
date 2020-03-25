import Nombre from "./nombre.js"
export default class Doctor{
    constructor({nombre, especialidad, telefono, cedula}){
        this._nombre = nombre
        this._especialidad = especialidad
        this._telefono = telefono
        this._cedula = cedula
    }
    getCedula(){
        return this._cedula
    }

    getApellidoPaternoDoc(){
        return this._nombre.getApellidoPaterno()
    }

    getPerfil(){
        return `${this._cedula}, ${this._especialidad}, Dr.${this._nombre.getApellidoPaterno()}, ${this._telefono}`
    }

    esIgualA(doctor){
        if(doctor.getCedula() === this._cedula){
            return true
        }else{
            return false
        }
    }
}