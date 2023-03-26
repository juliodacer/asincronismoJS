const fnAsync = () => {
    return new Promise(function(resolve, reject){
        (true) ? setTimeout(() => resolve('Async!!'), 2000)
        :
        reject(new Error('Error!'))
    })
}

// asynca va antes de los argumentos de la funcion
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something)
    console.log('Hello!')
}

console.log('Before');
anotherFn();
console.log('After')