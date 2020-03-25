var glob
export default class Fecha{
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    
    constructor(fecha){
        this._fecha = fecha

        this._diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

        this._años = ["Enero","Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
       
    }
    getAños(){
        let añosTranscurridos 
        añosTranscurridos = 2020 - this._fecha.getFullYear() 
        glob = añosTranscurridos
        return `${añosTranscurridos}`
    }
    getMeses(){
        let mesesTranscurridos
        mesesTranscurridos = glob * 12
        glob = mesesTranscurridos
        return `${mesesTranscurridos}`
    }
    getSemanas(){
        let semanasTranscurridas 
        semanasTranscurridas = glob * 4
        glob = semanasTranscurridas
        return `${semanasTranscurridas}`
    }
    getDias(){
        let diasTrasncurridos
        diasTrasncurridos = glob * 7
        glob = diasTrasncurridos
        return `${diasTrasncurridos}`
    }
    getFecha(){
        let mesDelAño
        mesDelAño = this._años[this._fecha.getMonth()]
        return `${this._fecha.getDate()}/${mesDelAño}/${this._fecha.getFullYear()}`
    }
    getDiaFecha(){
        let diaDeSemana
        diaDeSemana = this._diasSemana[this._fecha.getDay()]
        return `${diaDeSemana}`
    }
}