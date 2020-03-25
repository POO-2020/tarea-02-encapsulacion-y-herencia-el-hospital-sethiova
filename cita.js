export default class Cita{
    constructor({fecha, _hora, doctor, paciente}){
        this._fecha = fecha
        this._hora = _hora
        this._doctor = doctor
        this._paciente = paciente
    }
    getCita(){
        return `${this._fecha.getFecha()}, ${this._hora.getFormato24()}, Dr. ${this._doctor.getApellidoPaternoDoc()}, ${this._paciente.getNombreCompletoPac()}`
    }
}