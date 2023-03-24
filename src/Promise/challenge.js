import fetch from 'node-fetch'

const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    return fetch(urlApi)
}

// fetchData(`${API}/products`)
//     .then(response => response)
//     .then(products => console.log(products))
//     .catch(err => console.log(err))

fetchData(`${API}/products`)
    .then(response => response.json()) // Transformamos lo que estamos recbiendo a un objeto
    .then(products => {
        console.log('URL_PRODUCT', `${API}/products/${products[0].id}`)
        return fetchData(`${API}/products/${products[0].id}`)// llamo la segunda peticion (llamar a un producto en particular)
    })
    .then(response => response.json())
    .then(product => {
        console.log('URL_CATEGORIES', `${API}/categories/${product.category.id}`)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => console.log(category.name))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'))