//importar funciones de api y funciones
import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js"

//declarar la funcion anonima que contendra el cuerpo del codigo
(function(){
    //crear cuerpo de la funcion
    //llamar al formulario
    const formulario = document.querySelector('#formulario');
    //definir el evento
    formulario.addEventListener('submit',capturarCliente);

    //crear la funcion de nuevo cliente
    function capturarCliente(e){
        //prevenimos un error
        e.preventDefault();
        //capturamos los valores de los inputs del formulario
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        //crear el objeto que contenga los datos del formulario}
        const clienteNuevo = {
            //aqui si asignamos los nombres de las llaves del objeto igual a los nombres de las capturas de los inputs el programa detecta que son exactamente iguales por lo tanto solo hay que escribir el nombre de la llave
            nombre,
            email,
            telefono,
            empresa
        }
        //validar con un if si el objeto tiene alguna string vacia, en caso de tenerlo mostrar una alerta
        if(validar(clienteNuevo)){
            //mandamos a llamar a la funcion mostraralerta para que muestre el string
            mostrarAlerta('Todos los datos son obligatorios');
            //retornamos para detener la ejecucion
            return;
        }
        nuevoCliente(clienteNuevo);
    }
    //crear la funcion validar
    function validar(objeto){
        //valores no son cadenas vacias, si encuentra una regresa true
        return !Object.values(objeto).every(input => input !== '');
    }

})();