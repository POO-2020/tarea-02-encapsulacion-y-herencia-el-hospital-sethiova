import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Nombre from "./nombre.js";
import Cita from "./cita.js";

export default class Hospital {
    /**
     * 
     * @param {string} nombre 
     * @param {string} direccion 
     * @param {Doctor} doctores | clase Doctor
     * @param {Cita} citas | clase Cita
     */
    constructor(nombre, direccion){
        this.nombre = nombre
        this.direccion = direccion
        this.doctores = new Array()
        this.citas = new Array()
    }
    registrarDoctor(doctor){
        this.doctores.push(doctor)
    }
    listarDoctores(){
        this.doctores.forEach((doctor, i) =>{
            console.log(`${i}.- ${doctor.getPerfil()}`)
        })
    }
    registrarCita(cita){
    this.citas.push(cita)        
    }
    listarCitas(){
        this.citas.forEach((cita,i) => {
            console.log(`${i}.- ${cita.getCita()}`)
        })
    }
}