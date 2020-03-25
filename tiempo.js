export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minuto 
     * @param {string} periodo 
     */
    constructor(hora, minuto, periodo){
        this._hora = hora
        this._minuto = minuto
        this._periodo = periodo
        
        console.log("Elemento iniciaizado")
    }


    getFormato12(){
        return  `${this._hora}:${this._minuto} ${this._periodo}`
    }

    
    getFormato24(){
        let hora24
        let suma  
        let resta
        if( (this._hora == 12)&&(this._periodo == "AM") ){
            resta = this._hora - 12
            hora24 = resta
        }else if( (this._hora >= 1)&&(this._periodo == "PM")){
            suma = this._hora + 12
            hora24 = suma
        }else{
            return `${this._hora}:${this._minuto} ${this._periodo}`
        }
        return `${hora24}:${this._minuto} ${this._periodo}`
    }
}