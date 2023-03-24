/* 
    Una promesa tiene 3 estados:
    1. Pendiente (se esta ejecutando)
    2. Cumplido (regreso la informacion deseada)
    3. Rechazado
*/

// Nos regresa una funcion con 2 funciones dentro (resolve, reject)
const promise = new Promise(function(resolve, reject){
    resolve('Hey!')
})

const cows = 9

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    }else{
        reject("There no cows on the farm")
    }    
})

countCows.then((result) => { 
    console.log('result:', result) // Se ejecuta el resolve
}).catch((err) => { // catch: se ejecuta el reject
    console.log('error:', err)
}).finally(() => console.log('finally')) // Cuando la ejecucion termino toda ejecucion que puede estar esperando la pr


