import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data) {
    // Pasamos la URL a la que se conectara y 
    // elementos de configuracion
    const response = fetch(urlApi, {
        method: 'POST', // enviar
        mode: 'corse', // permisos -- corse
        credentials: 'same-origin', // opcional (si no hay autenticacion no pasa nada)
        headers: {
            'Content-Type': 'application/json'  //cabceras que enviaremos en la solicitud (tipo de valor que enviaremos es application/json) //
            // Si enviamos imagenes se tendra que cambiar la configuracion
        },
        body: JSON.stringify(data)
    })
    return response;
}

const data = {
    "title": "New Product de Julio Davila",
    "price": 10,
    "description": "Aprendiendo con el curso de asincronismo en Platzi",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'))
