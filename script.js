// Base de dados: idades e número de atletas por idade (Rio 2016)
const idadesAtletas2016 = {
    13: 2, 14: 11, 15: 23, 16: 117, 17: 183, 18: 264, 19: 501, 20: 620,
    21: 802, 22: 1023, 23: 1071, 24: 1092, 25: 1085, 26: 1020, 27: 1050,
    28: 922, 29: 767, 30: 637, 31: 523, 32: 415, 33: 350, 34: 283, 35: 200,
    36: 164, 37: 119, 38: 65, 39: 55, 40: 58, 41: 40, 42: 34, 43: 32, 44: 24,
    45: 11, 46: 17, 47: 23, 48: 13, 49: 8, 50: 8, 51: 16, 52: 11, 53: 6, 54: 8,
    55: 1, 56: 3, 58: 2, 60: 6, 61: 2, 62: 1
};

// Função para calcular a diferença de idade e revelar dados ao clicar no botão
document.getElementById('submit-age').addEventListener('click', function() {
    const userAge = parseInt(document.getElementById('age').value);
    const rayssaAge = 16; // Idade da Rayssa Leal em 2024

    if (!isNaN(userAge) && userAge > 0) {
        const ageDifference = userAge - rayssaAge;

        // Exibir o resultado com a diferença de idade
        document.getElementById('age-difference').textContent = ageDifference;
        document.getElementById('result').classList.remove('hidden');
    }
});

// Função para revelar dados de 2016 e 2004 ao clicar no botão
document.getElementById('reveal-more').addEventListener('click', function() {
    const userAge = parseInt(document.getElementById('age').value);

    // Cálculos para as Olimpíadas de 2016 (Rio)
    const ageIn2016 = userAge - 8; // Rio 2016 foi há 8 anos
    let athletesOlderThanUser2016 = 0;
    let athletesYoungerThanUser2016 = 0;

    // Contabiliza quantos atletas eram mais velhos ou mais jovens que o usuário em 2016
    for (const [age, count] of Object.entries(idadesAtletas2016)) {
        if (parseInt(age) > ageIn2016) {
            athletesOlderThanUser2016 += count;
        } else if (parseInt(age) < ageIn2016) {
            athletesYoungerThanUser2016 += count;
        }
    }

    // Texto baseado na comparação de atletas mais velhos ou mais jovens
    let comparisonText2016 = athletesOlderThanUser2016 > athletesYoungerThanUser2016 
        ? `Como a maioria dos atletas tinha mais idade que você, é provável que você tenha notado menos atletas jovens em destaque em 2016.` 
        : `Em 2016, você provavelmente notou atletas mais jovens em destaque, já que havia mais atletas com menos idade que você.`;

    document.getElementById('rio-2016').textContent = `Nas Olimpíadas Rio 2016, você tinha ${ageIn2016} anos. ${athletesOlderThanUser2016} atletas eram mais velhos que você, e ${athletesYoungerThanUser2016} eram mais novos. ${comparisonText2016}`;

    // Cálculos para as Olimpíadas de 2004 (Atenas)
    const ageIn2004 = userAge - 20; // Atenas 2004 foi há 20 anos

    // Faixas etárias em 2004
    const faixasEtarias2004 = {
        "Menos que 18 anos": 2.35,
        "18 a 25 anos": 46.03,
        "26 a 29 anos": 28.64,
        "30 anos ou mais": 22.99
    };

    let percentageOlderAthletes2004;
    let percentageSameOrYounger2004;

    // Definindo a faixa etária do usuário em 2004
    if (ageIn2004 < 18) {
        percentageOlderAthletes2004 = 100; // Quase todos mais velhos que você
        percentageSameOrYounger2004 = 0;
    } else if (ageIn2004 >= 18 && ageIn2004 <= 25) {
        percentageOlderAthletes2004 = faixasEtarias2004["26 a 29 anos"] + faixasEtarias2004["30 anos ou mais"];
        percentageSameOrYounger2004 = faixasEtarias2004["18 a 25 anos"] + faixasEtarias2004["Menos que 18 anos"];
    } else if (ageIn2004 >= 26 && ageIn2004 <= 29) {
        percentageOlderAthletes2004 = faixasEtarias2004["30 anos ou mais"];
        percentageSameOrYounger2004 = faixasEtarias2004["18 a 25 anos"] + faixasEtarias2004["Menos que 18 anos"];
    } else {
        percentageOlderAthletes2004 = 0; // Nenhum atleta mais velho
        percentageSameOrYounger2004 = 100; // Todos com a mesma idade ou mais novos
    }

    document.getElementById('athens-2004').textContent = `Nas Olimpíadas de Atenas 2004, você tinha ${ageIn2004} anos. ${percentageOlderAthletes2004}% dos atletas eram mais velhos que você, enquanto ${percentageSameOrYounger2004}% tinham idade semelhante ou eram mais jovens.`;

    // Revelar as seções
    document.getElementById('athletes-over-30').classList.remove('hidden');
    document.getElementById('previous-years').classList.remove('hidden');
    document.getElementById('age-trend').classList.remove('hidden'); // Revela também a seção de avanço de idades
});
