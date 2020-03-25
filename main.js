import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./pacienteAsegurado.js"

class Main{

    constructor(){

        this.nombreDoctor = new Nombre("Juan Perez", "Gonzalez", "Herrera")

        this.horas = new Tiempo(10,15,"AM")

        this.fechas = new Fecha(new Date(2001,1,31))

        this.nombres = new Nombre("Bastian Natael", "Hernández", "Corona")

        this.fechaVigencia = new Fecha( new Date (2010,2,12) ) 

        let datoDoctor = {
            nombre: this.nombreDoctor,
            especialidad: "Oftalmologo",
            telefono: 3123125641,
            cedula: 1232134651
        }
        this.doctor1 = new Doctor(datoDoctor)

        let datoPaciente = {
            nombre: this.nombres,
            fecha: this.fechas, 
            telefono: 3123194899
        }
        this.paciente = new Paciente(datoPaciente)

        let datoDoctor2 = {
            nombre: this.nombres, 
            especialidad: "Oftalmologo", 
            telefono: 3123194899, 
            cedula: 10203050
        }
        this.doctores = new Doctor(datoDoctor2)

        let datoCita = {
            fecha: this.fechas, 
            hora: this.horas, 
            doctor: this.doctor1, 
            paciente: this.paciente
        }
        this.citas = new Cita(datoCita)

        let datoHospital = {
            nombre: "Hospital Bastian De la Hoz", 
            direccion: "Av. de los Maestro #112"
        }
        this.hospitales = new Hospital(datoHospital)

        let datoPacienteAsegurado = {
            nombre: new Nombre("Quetzalli", "Ruiz", "Cueva"),
            fecha: new Fecha( new Date(2001,2,12) ), 
            telefono: 3127674123,
            noPoliz: "S1232cCE2312",
            fechVigencia: this.fechaVigencia,
            compa: "AT&T"
        }
        this.pacienteAsegurado = new PacienteAsegurado(datoPacienteAsegurado)

    }




   
    getTempo(){
        console.log(`Son las ${this.horas.getFormato12()}`)
        console.log(`Son las ${this.horas.getFormato24()}`)

    }

   
    getFecha(){
        console.log(`Año ${this.fechas.getAños()}`)
        console.log(`Meses ${this.fechas.getMeses()}`)
        console.log(`Semanas ${this.fechas.getSemanas()}`)
        console.log(`Días ${this.fechas.getDias()}`)
        console.log(`Fecha ${this.fechas.getFecha()}`)
        console.log(`Día ${this.fechas.getDiaFecha()}`)
    }

    
    getNombre(){
        console.log(`Nombre ${this.nombres.getNombreCompleto()}`)
        console.log(`Nombre ${this.nombres.getApellidoNombre()}`)
        console.log(`Iniciales ${this.nombres.getIniciales()}`)
    }

    getPaciente(){
        console.log(`Perfil ${this.paciente.getPerfil()}`)

        this.pacienteAsegurado.getPerfil()
    }

    getDoctor(){
        console.log(`${this.doctores.getPerfil()}`)
    }

    getCita(){
        console.log(`${this.citas.getCita()}`)
    }


}

let app = new Main()
app.getPaciente()