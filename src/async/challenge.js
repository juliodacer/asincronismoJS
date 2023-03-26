import fetch from 'node-fetch'
// const API = 'https://api.escuelajs.co/api/v1'

const API = 'https://api.escuelajs.co/api/v1'
const API_FAKE = 'https://domain-api.com'
// una forma
async function fetchData(urlApi){
    const response = await fetch(urlApi)
    const data = await response.json()
    return data;
}

// 2do caso
const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products)
        console.log(product)
        console.log(category)
    } catch (error) { //catch -> imprime el reject de la promesa 
        // console.log(error)
        throw new Error('API not found')
    }
}

//reto 
export async function runCode() {
    const url = "https://domain-api-com"
    try{
        await fetch(url)
    }catch(error) {
        throw new Error('API Not Found')
    }
}

// Por debajo fetch utiliza el conceto de las proomesas

//anotherFunction(API_FAKE)
runCode()
