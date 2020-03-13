import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Nombre from "./nombre.js";
import Cita from ".//cita.js";
import Hospital from "./hospital.js";

class Main{
    constructor(){
        this.hospital = new Hospital("Hospital", "De Gamers")
    }

    agregarDoctor(){
        let doctor1 = new Doctor(new Nombre("Mario","Saguayo","UWU"), "Cardiologo", "312-135-9966", "A72H89SJA")
        let doctor2 = new Doctor(new Nombre("Jose", "Marian","OWO"), "Oculista", "312-123-3445", "AKJSJIAJD")
       
       this.hospital.registrarDoctor(doctor1)
       this.hospital.registrarDoctor(doctor2)
       this.hospital.listarDoctores()  
    }
    agregarCita(){
    let cita1 = new Cita(new Date(), new Tiempo(new Date()), new Nombre("Martin", "Lopez", "Mendoza"), new Nombre("Maxi", "Jimenez", "Lopez"))
    this.hospital.registrarCita(cita1)
    this.hospital.listarCitas()
}

}
let app = new Main()
app.agregarDoctor()
app.agregarCita()