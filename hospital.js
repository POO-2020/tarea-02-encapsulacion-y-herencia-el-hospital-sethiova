import Doctor from "./doctor.js"
import Cita from "./cita.js"

export default class Hospital{
    constructor({nombre, direccion}){
        this._nombre = nombre
        this._direccion = direccion
        this._doctor = new Array()
        this._cita = new Array()
    }
    getRegistrarDoctor(doctor){
        this._doctor.push(doctor)
    }

    getListarDoctores(){
        this._doctor.forEach((doctor,i) => {
            console.log(`No.- ${i + 1}: ${doctor.getPerfil()}`)
        })
    }

    _encontrarIndiceDoctor(doctor){
        let indice = this._doctor.findIndex((e => e.esIgualA(doctor)))
        return indice
    }

    _encontrarDoctor(doctor){
        let indice = this._doctor.find((e => e.esIgualA(doctor)))
        return indice
    }

    elimanr(doctor){
        let indice = this._encontrarIndiceEstudiante(doctor)

        if(indice < 0){
            return false
        }

        this._doctor.splice(indice, 1)
        return true
    }
    getRegistrarCitas(cita){
        this._cita.push(cita)
    }
    getListarCitas(){
        this._cita.forEach((cita,i) => {
            console.log(`No.- ${i + 1}: ${cita.getCita()}`)
        })
    }
}