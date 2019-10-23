export default class Ruta {
    constructor(objRuta) {
        this._numero = objRuta.numero;
        this._matricula = objRuta.matricula;
        this._inicio = null;
        this._fin = null;
    }

    get numero() {
        return this._numero;
    }
    get matricula() {
        return this._matricula;
    }

    agregarBase(base) {
        if (this._inicio == null) {
            this._inicio = base;
            this._fin = base;
            this._inicio.siguiente = this._fin;
            this._fin.siguiente = this._inicio;
        } else {
            this._fin.siguiente = base;
            this._fin = base;
            this._fin.siguiente = this._inicio;
            console.log(this._inicio);

        }
    }

    buscar(ubicacion) {
        let primero = this._inicio;
        let ultimo = this._fin;

        if (primero.ubicacion == ubicacion) {
            return ultimo;
        } else {
            while (primero.siguiente.ubicacion != ubicacion && ultimo.codigo != ubicacion) {
                primero = primero.siguiente;
            }
        }
        return primero;
    }
    eliminarBase(ubicacion) {
        let base = this.buscar(ubicacion);
        if (base == this._inicio && base == this._fin) {
            this._inicio = this._fin = null;
        } else if (base.siguiente == this._inicio) {
            base.siguiente = base.siguiente.siguiente
            this._inicio = base.siguiente;
        } else if (base.siguiente == this._fin) {
            base.siguiente = base.siguiente.siguiente;
        } else {
            base.siguiente = base.siguiente.siguiente;
        }

    }
}