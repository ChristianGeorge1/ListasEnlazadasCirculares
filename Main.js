import Ruta from './Ruta.js';
import Base from './Base.js';

class Main {
    constructor() {
        let objRuta = {
            numero: 9,
            matricula: '10-FE-1P'
        };
        let ruta = new Ruta(objRuta);

        document.getElementById('btnAñadir').addEventListener('click', () => {
            console.log('hola');
            let objBase = {
                localizacion: document.getElementById('localizacion').value,
                tiempoE: document.getElementById('tiempoE').value,
                tiempoS: document.getElementById('tiempoS').value
            };
            let base = new Base(objBase);
            ruta.agregarBase(objBase)
        })
        document.getElementById('btnEliminar').addEventListener('click', () => {
            let eliminar = document.getElementById('eliminarU').value;
            ruta.eliminarBase(eliminar)
        })
    }
}
let m = new Main();