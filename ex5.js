let palavra = "aaa bbbb cccc"
let palavra_invertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavra_invertida = palavra_invertida + palavra[i]
}

console.log(palavra_invertida)