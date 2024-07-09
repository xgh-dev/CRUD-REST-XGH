import { buscarCliente,actualizarCliente } from "./API.js"; 
import {mostrarAlerta} from "./funciones.js"

// Asegúrate de que la extensión esté incluida

//abrir la función anónima
(function () {
    // Definir el evento que ejecutará la carga de datos en el formulario cuando el DOM esté cargado
    document.addEventListener('DOMContentLoaded', cargarFormulario);    
    //función para capturar el valor del parámetro directamente desde la URL actual de la página
    function link(){
        const url = new URL(window.location.href);
        //creamos una búsqueda de parámetros para obtener el id
        const buscarParametro = new URLSearchParams(url.search);
        //capturamos el parámetro id 
        const id = buscarParametro.get('id');
        //console.log(id);
        return id;
    };

    //función para cargar el formulario con los datos del cliente
    async function cargarFormulario(){
        const linkID = link();
        const cliente = await buscarCliente(linkID);
        //console.log(cliente);
        //aquí puedes añadir el código para llenar el formulario con los datos del cliente
        document.querySelector('#nombre').value = cliente.nombre;
        document.querySelector('#email').value = cliente.email;
        document.querySelector('#telefono').value = cliente.telefono;
        document.querySelector('#empresa').value = cliente.empresa;
        const guardarCambios = document.querySelector('#formulario')
        //console.log(guardarCambios)
        guardarCambios.addEventListener('submit',actualizarDatos);
    };
    
    function actualizarDatos(e){
        e.preventDefault();
        const linkID = link();
        const datosActualizados = {
            nombre: document.querySelector('#nombre').value,
            email: document.querySelector('#email').value,
            telefono: document.querySelector('#telefono').value,
            empresa: document.querySelector('#empresa').value
        }
        //crear una funcion que valide el estado de los inputs
        actualizarCliente(linkID,datosActualizados);
    }

})();
