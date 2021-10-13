// São funções usadas para construir objetos
// O exemplo abaixo é de uma função construtora de fentiladores.
// a palavra "this" é utilizada para apontar para o objeto que vai ser construido
// o exemplo abaixo é uma função construtora de ventiladores.

function Ventilador(velMax) {
    this.valocidadeMaxima = velMax;
    this.ligado = false;
}

// Instâncias
// Para criar uma instância de uma objeto do tipo "Ventilador", usamos a palavra reservada "new" seguida da chamada da função
const ventilador1 = new Ventilador(3)

// Acessando propriedades
//Para acessar propriedades usamos o "."
console.log(ventilador1.velocidadeMaxima);