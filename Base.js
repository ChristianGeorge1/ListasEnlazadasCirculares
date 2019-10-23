export default class Base {
    constructor(objBase) {
        this._localizacion = objBase.localizacion;
        this._tiempoE = objBase.tiempoE;
        this._tiempoS = objBase.tiempoS;
        this._siguiente = null;
    }

    get entrada() {
        return this._tiempoE;
    }
    get salida() {
        return this._tiempoS;
    }
    get localizacion() {
        return this._localizacion;
    }
    set localizacion(nuevaLocalizacion) {
        this._localizacion = nuevaLocalizacion;
    }
    set entrada(nuevaEntrada) {
        this._tiempoE = nuevaEntrada;
    }
    set salida(nuevaSalida) {
        this._tiempoS = nuevaSalida;
    }

}