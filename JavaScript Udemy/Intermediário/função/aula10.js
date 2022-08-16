function* geradora(){
    // Código qualquer...
    yield 'Valor 1'
    // Código qualquer...
    yield 'Valor 2'
    // Código qualquer...
    yield 'Valor 3'
}

const g1 = geradora()
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())


function* geradora2(){
    let i = 0
    while(true){
        yield i
        i++
    }
}

const ger2= geradora2()
console.log(ger2.next().value)
console.log(ger2.next().value)
console.log(ger2.next().value)
console.log(ger2.next().value)

function* geradora3(){
    yield 0
    yield 1
    yield 2
}

function* geradora4(){
    yield* geradora3()
    yield 3
    yield 4
}

const g4 = geradora4()
for (let valor of g4){
    console.log(valor)
}

function* geradora5(){
    yield function(){
        console.log('vim do y1')
    }

    yield function(){
        console.log('vim do y2')
    }
}

const g5 = geradora5()
let func1 = g5.next().value
let func2 = g5.next().value
func1()
func2()


