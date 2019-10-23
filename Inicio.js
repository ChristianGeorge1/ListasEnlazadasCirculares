export default class Inicio {
    constructor() {
        this._primerCamion = null;
        this._utlimoCamion = null;
    }

    get primerCamion() {
        return this._primerCamion;
    }
    get ultimoCamion() {
        return this._utlimoCamion;
    }
    set primerCamion(camion) {
        this._primerCamion = camion;
    }
    set ultimoCamion(camion) {
        this._utlimoCamion = camion;
    }
    agregarCamion(nuevoC) {
        if (this._primerCamion == null) {
            this._primerCamion = nuevoC;
            this._primerCamion.siguiente = this._utlimoCamion;
            this._utlimoCamion = nuevoC;
        }
    }
}