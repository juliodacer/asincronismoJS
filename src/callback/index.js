function printName(name){
    return `Hola ${name}`
}

function runCode (name, callback) {
    return callback(name)
}

setTimeout(function(){
    console.log(runCode('Maria', printName))
}, 2000)