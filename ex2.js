let sequencia = [0, 1]
let n = 5
for (let i = 0; sequencia[sequencia.length - 1] < n; i++) {
    let n_termos = sequencia.length
    sequencia.push(sequencia[n_termos - 1] + sequencia[n_termos - 2])
    // console.log(sequencia)
}
if (n == 0) {
    console.log("O número informado está na sequência")
}
else if (n == 1) {
    console.log("O número informado está na sequência")
}
else if (sequencia[sequencia.length - 1] == n) {
    console.log("O número informado está na sequência")
}
else console.log("O número informado não está na sequência")
