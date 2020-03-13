export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo 
     */
    constructor(fecha){
        this._fecha = fecha
        this._hora = this._fecha.getHours()
        this._minutos = this._fecha.getMinutes()
        this._periodo = new Array("Am","Pm")
    }
    getFormato12(){
        if (this._hora >= 12){
            let hora = (`${this._hora - 12}:${this._minutos} ${this._periodo[1]}`)
            return(`${hora}`)
        }
        else{
            let hora = (`${this._hora}:${this._minutos} ${this._periodo[0]}`)
            return(`${hora}`)
        }
      
    }
    getFormato24(){
        let hora = (`${this._hora}:${this._minutos}`)
        return(`${hora}`)
    }
}
