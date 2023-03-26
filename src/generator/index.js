function* gen() { // * nos permote identificar esta estructura
    // Nos permite crear una funcion que podemos usar para controlar ese iterador,
    // Lo que nos va a permitir pausar o retomar lo que nosotros queremos en cualquier momento
    // bloque de la informacion, steps

    yield 1;
    yield 2;
    yield 3;
}

// funcion que nos permitira llamar o parar las solicitudes que hagamos

const g = gen();
console.log(g.next().value) // netx nos permite ir generando
console.log(g.next().value)
console.log(g.next().value)

function* iterable(array) {
    for(let value of array){
        yield value
    }
}

const it = iterable(['oscar', 'omrar', 'ana', 'lucia', 'juana'])
console.log(it.next()) // obtener el primer elemento
console.log(it.next().value)
