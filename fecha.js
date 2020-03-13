export default class Fecha {

    constructor(fecha){
        this._fecha = fecha
        this._fechaActual = new Date
        this._mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")
        this._dia = new Array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo")
    }
    getAños(){
        return(`${this._fechaActual.getFullYear() - this._fecha.getFullYear()} años`)

    }
    getMeses(){
        let mes = (this._fechaActual.getFullYear() - this._fecha.getFullYear()) * 12 + (this._fechaActual.getMonth())
        return (`${mes} meses`)
    }
    getSemanas(){
        let semana = (this._fechaActual.getFullYear() - this._fecha.getFullYear()) * 52 + ((this._fechaActual.getMonth()) * 4 + (Math.round((this._fechaActual.getDate()) / 7 )))
        return(`${semana} semanas`)

    }
    getDias(){
        let dia = (this._fechaActual.getFullYear() - this._fecha.getFullYear()) * 365 + ((this._fechaActual.getMonth()) * 30) 
        return(`${dia} dias`)
    }
    getFecha(){
        let mes = this._mes[this._fecha.getMonth()]
        return(`${this._fecha.getDate()}/${mes}/${this._fecha.getFullYear()}`)
    }
    getDiaFecha(){
        let dia = this._dia[this._fecha.getDay()-1]
        return(`Es el dia ${dia}`)
    }
}
