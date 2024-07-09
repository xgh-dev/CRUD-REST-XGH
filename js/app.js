import { mostrarClientes,eliminarCliente } from "./API.js"

//definicion de la funcion anonima
(function (){
    //llamar al elemento que contendra los html
    const tabla = document.querySelector('#listado-clientes');
    //definir el evento que ejecute la carga de datos en el html
    document.addEventListener('DOMContentLoaded',cargarClientes);
    //definir async a la funcion
    async function cargarClientes(){
        //guardamos los datos en una constante, los datos seran retornados por la funcion importada
        //definir el await a la ejecucion de la funcion que realiza la llamada
        const datos = await mostrarClientes();
        //mediante un foreach iteraremos los datos
        datos.forEach(cliente => {
            //definir un objeto que extraiga los datos de la vairable cliente dada al foreach
            const {nombre,email,telefono,empresa,id} = cliente;
            //crear la constante que guarde la creacion del elemento tr
            const row = document.createElement('tr');
            row.innerHTML+=`
                <td class"px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${nombre}</p>
                    <p class="text-sm leading-10 text-gray-700">${email}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                
                    <p class="text-gray-700">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a> 
                </td>
            `;
            tabla.appendChild(row);
        })
        //la captura del elemento con clase .eliminar la hacemos dentro de la funcion de cargar clientes
        const eliminar = document.querySelector('.eliminar');
        //definimos el evento click de boorrarCliente
        eliminar.addEventListener('click',borrarCliente)
    }
    async function borrarCliente(e){
        e.preventDefault()
        //capturar el lugar donde se dio el evento click, analizar bien el nombre del atributo que querramos jalar
        const id = e.target.getAttribute('data-cliente');
        //console.log(id);
        //crear el await que nos recibira hara la modificacion de los datos
        await eliminarCliente(id);
        //las siguientes lineas de codigo no hace falta usarlas por que mientras la pagina este cargada el codigo de mostrar clientes se estara ejecutando
        
        //limpiamos la tabla
        //limpiarTabla();
        //refrescamos la carga de clientes
        //cargarClientes();
    }

    /*
    function limpiarTabla(){
        while (tabla.firstChild){
            tabla.removeChild(tabla.firstChild);
        }
    }
    */

})();