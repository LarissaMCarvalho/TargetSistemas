const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

let soma = sp + rj + mg + es + outros

console.log(`
        Participação mensal de cada estado:
        SP: ${((sp/soma)*100).toFixed(2)}%
        RJ: ${((rj/soma)*100).toFixed(2)}%
        MG: ${((mg/soma)*100).toFixed(2)}%
        ES: ${((es/soma)*100).toFixed(2)}%
        Outros: ${((outros/soma)*100).toFixed(2)}%
`)