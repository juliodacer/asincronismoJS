const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const API = 'https://api.escuelajs.co/api/v1' // nomenclatura MAYUSCULA, Referencia a un valor que no cambiara dentro de nuestros archivos

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest() // referencia

    // Forma de realizar llamadas http a inicios de JavaScript

    xhttp.open('GET', urlApi, true); //open, abrir una conexion, arguemntos: tipo ('GET'), la url, true para habilitarla
    xhttp.onreadystatechange = function(event){ // escuchar diferentes estados que tiene la solicitud
        /* {
            estados:
            0: no se inicializo
            1: loading (aun no se jecuto el valor de send)
            2: ejecutado (send)
            3: interactuando (descargando data o trabajando con la solicitud)
            4: completado
        } */
        if (xhttp.readyState === 4){
        /* {
            estados:
            100 - 109: Respuestas informativas
            200 - 299: Respuestas satisfactorias
            300 - 399: Redirecciones
            400 - 499: Errores de los clientes
            500 - 599: Errores de los servidores
        }*/
            if(xhttp.status === 200){ // validar que el servidor respondio de forma correcta
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error' + urlApi)
                return callback(error, null)
            }
        }
    }
    xhttp.send() // Para que se ejecute toda la logica que previamente creado

}

// `` => comillas francesas
fetchData(`${API}/products`, function(error1, data1){
    if(error1) return console.log(error1)
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        // console.log('DATA_1', JSON.stringify(data1))
        if(error2) return console.error(error2)
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3)
            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
        })
    })
})