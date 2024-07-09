//de entrada debemos asignar la url de donde realizaremos las consultas 
const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async datos => {
    //declarar el try
    try {
        //declarar el await a la funcion fetch
        await fetch(url,{
            //indicamos el metodo que estamos utilizando
            method:'POST',
            //a los datos pasados le convertimos a tipo cadena de texto de JSON
            body: JSON.stringify(datos),
            //indicamos que estamos pasando un json
            headers:{'Content-Type':'application/json'}
            //El objeto headers en una solicitud HTTP se utiliza para establecer información adicional sobre la solicitud. Los encabezados HTTP (headers) permiten al cliente y al servidor intercambiar información sobre los datos que se están solicitando o enviando
        });
    } catch (error) {
        console.log(error);
    }
};

//esta funcion hace una consulta de datos a la api
export const mostrarClientes = async () => {
    //esta consulta esta constituida por un try-catch
    try {
        //aqui mediante await debemos definir el fetch con la url dada esto debemos guardalo en constantes, esto al final es una consulta  cualquiera de datos como la que hicimos en la practica del clima, en la que con fetch y la url creamos la consulta y a esos datos los convertimos a formato json y posteriormente con la ayuda de un objeto extraeremos los datos
        //creamos la consulta
        const datos = await fetch(url);
        //covertimos la consulta a formato json
        const clientes = await datos.json();
        //retornamos los datos
        return clientes;

    } catch (error) {
        console.log(error)
    }

};

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`,{
            method: "DELETE",
            //los siguiente no tiene que ir al ser un delete
            //body:JSON.stringify(id),
            //headers:{'Content-Type':'application/json'}
        }
    );
    } catch (error) {
        console.log(error);
    }
}

export const buscarCliente = async id => {
    // Asegúrate de que 'url' esté definida en el contexto apropiado
    try {
        // Definimos una constante que guarda el await de fetch
        const response = await fetch(`${url}/${id}`);
        // Transformamos el contenido a formato JSON
        const cliente = await response.json();
        // Retornamos el contenido
        return cliente;
    } catch (error) {
        console.error(error);
        // Puedes retornar null o algún valor por defecto en caso de error
    }
}

export const actualizarCliente = async (link,datos) => {
    try {
        await fetch(`${url}/${link}`,{
            //indicar el metodo
            method:'PUT',
            //traducir los datos asignados
            body:JSON.stringify(datos),
            headers:{'Content-type':'application/json'}
        })
    } catch (error) {
        console.log(error)
    }
}
