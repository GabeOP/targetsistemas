// 1) 
let sequencia = [];
sequencia.push(0);
sequencia.push(1);
let n = 10;
let pertenceOuNao = 89

for(let i = 0; i < n; i++) {
  sequencia.push(sequencia[i] + sequencia[i+1]);
}

for(let i = 0; i < sequencia.length; i++) {
  if(sequencia[i] === pertenceOuNao) {
    console.log(sequencia);
    console.log("Esse número pertence à sequência.");
    return;
  }
}

console.log(sequencia);

// 2)
let texto = "ArAra";
let qtd = 0;

for(let i = 0; i < texto.length; i++) {
  if(texto.charAt(i).toLowerCase() === 'a') {
    qtd++;
  }
}

if(qtd > 0) {
  console.log("A quantidade de vezes que a letra 'A' se repete é: " + qtd);
}

// 3)
let indice = 12;
let soma = 0;
let K = 0;

while(K < indice) {
  K++; 
  soma += K;
}

console.log(soma); // O valor da variável SOMA será 78;

// 4)
/* 
  A lógica que completa o próximo elemento é:
  a) 2 números a mais que o anterior. O próximo elemento será 9.
  b) Multiplicação de 2 para o primeiro número e os seus resultados. O próximo elemento será 128.
  c) O quadrado de 0, 1, 2, 3 e assim por diante. O próximo elemento será 49
  d) O quadrado de 2, 4, 6 e 8 respectivamente, pulando de 2 em 2. O próximo elemento será 100.
  e) Sequência de Fibonacci. O próximo elemento será 13
  f) naõ encontrei padrão
*/

//5)
/* 
  Acendo dois interruptores e vou na sala 1, se a lampada estiver apagada eu já descobri 1. Volto, apago um interruptor e acendo o interruptor que a princípio 
  estava apagado. Vou para a sala 2 e vejo se a luz está acesa ou apagada, descobrindo os interruptores. 

  Se a lampada da sala 1 estiver acesa, volto e desligo apenas um interruptor e vou até a sala 2. Se a lampada da sala 2 estiver acesa, descobri que o interruptor
  dela é o que eu deixei ligado, senão, descubro que o interruptor dela é o que eu desliguei 
*/
