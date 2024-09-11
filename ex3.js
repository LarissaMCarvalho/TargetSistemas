let fs = require("fs")

fs.readFile('dados.json', 'utf8', (err, data) => {
    let media = 0
    let soma = 0
    let dias_contabeis = 0
    let dias_acima_media = 0
    if (err) {
        console.error(err);
        return;
    }
    data = JSON.parse(data)
    let maior = data[0].valor
    let menor = data[0].valor
    // console.log(data)

    for (const dia of data) {
        if (dia.valor != 0) {
            soma = soma + dia.valor
            dias_contabeis++
            if (maior < dia.valor) maior = dia.valor
            if (menor > dia.valor) menor = dia.valor
        }
    }
    
    media = soma / dias_contabeis
    
    console.log(`Maior: ${maior}, menor: ${menor}`)
    
    for (const dia of data) {
        if (dia.valor > media) dias_acima_media++
    }
    console.log(`Quantidade de dias acima da média: ${dias_acima_media}`)
});