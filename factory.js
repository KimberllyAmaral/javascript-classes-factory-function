// In JavaScript, any function can return a new object.
// When it's not a constructor function or class, it's called a factory function.

function personFactory(name){
    let count = 0
    return {
        count: () => count++,
        name: name,
        type: 'person'
    }
}
const tulio = personFactory('Tulio')
const joao = personFactory('Joao')

console.log(tulio.count())
