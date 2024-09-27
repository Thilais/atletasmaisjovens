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
        let message = '';

        // Condições para diferentes intervalos de idade
        if (ageDifference >= 5) {
            message = `Em Paris 2024, você tem ${ageDifference} anos a mais que Rayssa Leal, que tinha 16 anos. Essa diferença de idade pode influenciar sua percepção ao assistir aos Jogos, onde atletas jovens como ela podem chamar mais a sua atenção.`;
        } else if (ageDifference >= 1 && ageDifference <= 4) {
            message = `Em Paris 2024, você tem ${ageDifference} anos a mais que Rayssa Leal, que tinha 16 anos. Uma diferença não tão grande, mas que pode influenciar sua percepção ao assistir aos Jogos, onde atletas jovens como ela podem chamar mais a sua atenção.`;
        } else if (ageDifference === 0) {
            message = `Em Paris 2024, você tem a mesma idade que Rayssa Leal, que tinha 16 anos. Pode ter chamado a sua atenção alguém com a sua idade realizando grandes feitos.`;
        } else if (ageDifference < 0) {
            message = `Em Paris 2024, Rayssa Leal tinha 16 anos, e era mais velha que você. Nesse caso, você não deve ter nenhuma reflexão sobre tendência de atletas mais jovens.`;
        }

        // Exibir o resultado com a diferença de idade e a mensagem
        document.querySelector('.result-text').textContent = message;
        document.getElementById('result').classList.remove('hidden');
    } else {
        alert('Por favor, insira uma idade válida.');
    }
});

// Função para revelar dados das Olimpíadas Rio 2016 e Atenas 2004 ao clicar no botão
document.getElementById('reveal-more').addEventListener('click', function() {
    const userAge = parseInt(document.getElementById('age').value);

    if (isNaN(userAge) || userAge <= 0) {
        alert('Por favor, insira sua idade primeiro.');
        return;
    }

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

    // Condições para diferentes idades em 2016
    let message2016 = '';

    if (ageIn2016 === 25) {
        message2016 = `Nas Olimpíadas Rio 2016, você tinha ${ageIn2016} anos. ${athletesOlderThanUser2016} atletas eram mais velhos que você, e ${athletesYoungerThanUser2016} eram mais novos. Uma quantidade equilibrada para ambos os lados, o que pode ter te feito nem cogitar olhar criticamente para a idade dos atletas.`;
    } else if (ageIn2016  >= 23 && ageIn2016 <= 24) {
        message2016 = `Nas Olimpíadas Rio 2016, você tinha ${ageIn2016} anos. ${athletesOlderThanUser2016} atletas eram mais velhos que você, e ${athletesYoungerThanUser2016} eram mais novos. Como a maioria dos atletas tinham mais idade que você, é provável que não tenha se destacado para você a pouca idade de parte dos competidores dessa edição, considerando que você tem uma idade muito próxima da média de idade dos atletas.`;
    } else if (ageIn2016 >= 18 && ageIn2016 <= 22) {
        message2016 = `Nas Olimpíadas Rio 2016, você tinha ${ageIn2016} anos. ${athletesOlderThanUser2016} atletas eram mais velhos que você, e ${athletesYoungerThanUser2016} eram mais novos. Como a grande maioria dos atletas tinham mais idade que você, é provável que não tenha se destacado para você a pouca idade de parte dos competidores dessa edição, considerando que você tem uma idade muito próxima da média de idade dos atletas.`;
    } else if (ageIn2016 >= 13 && ageIn2016 <= 17) {
        message2016 = `Nas Olimpíadas Rio 2016, você tinha ${ageIn2016} anos. ${athletesOlderThanUser2016} atletas eram mais velhos que você, e ${athletesYoungerThanUser2016} eram mais novos. A maioria esmagadora dos atletas tinham mais idade que você, é provável que não tenha se destacado para você a pouca idade de parte dos competidores dessa edição, considerando que você também tinha pouca idade.`;
    } else if (ageIn2016 >= 26 && ageIn2016 <= 61) {
        message2016 = `Nas Olimpíadas Rio 2016, você tinha ${ageIn2016} anos. ${athletesOlderThanUser2016} atletas eram mais velhos que você, e você tinha mais idade que uma parcela considerável de atletas, ${athletesYoungerThanUser2016} eram mais novos. Você deve ter sido ainda mais impactado pelo destaque que Rayssa Leal teve nessa edição.`;
    } else if (ageIn2016 >= 62) {
        message2016 = `Nas Olimpíadas Rio 2016, você tinha ${ageIn2016} anos. Você tinha mais idade que todos atletas, ${athletesYoungerThanUser2016} eram mais novos. Você deve ter sido ainda mais impactado pelo destaque que Rayssa Leal teve nessa edição.`;
    } else if (ageIn2016 <= 12) {
        message2016 = `Nas Olimpíadas Rio 2016, você tinha poucos anos de vida ou nem tinha nascido.`;
    }

    // Exibir a mensagem sobre os Jogos Rio 2016
    document.getElementById('rio-2016').textContent = message2016;


// Cálculos para as Olimpíadas de 2004 (Atenas)
const ageIn2004 = userAge - 20; // Atenas 2004 foi há 20 anos

// Faixas etárias em 2004
const faixasEtarias2004 = {
    "Entre 13 e 18 anos": 2.4,
    "18 a 25 anos": 46.0,
    "26 a 29 anos": 28.6,
    "30 anos ou mais": 22.9
};

let percentageOlderAthletes2004;
let percentageSameOrYounger2004;
let message2004 = "";

// Função para ajustar o plural ou singular de "anos"
const formatAge = (age) => age === 1 ? "1 ano" : `${age} anos`;

// Definindo a faixa etária do usuário em 2004 e a resposta
if (ageIn2004 < 0) {
    message2004 = "Você não tinha nascido em 2004.";
} else if (ageIn2004 >= 0 && ageIn2004 < 8) {
    message2004 = `Em 2004, você tinha ${formatAge(ageIn2004)}, era muito jovem para se lembrar dos Jogos de Atenas, e todos os atletas eram mais velhos que você.`;
} else if (ageIn2004 >= 8 && ageIn2004 < 13) {
    message2004 = `Em 2004, você tinha ${formatAge(ageIn2004)}, ou seja, menos idade que todos os atletas da edição Atenas 2004.`;
} else if (ageIn2004 >= 13 && ageIn2004 < 18) {
    percentageOlderAthletes2004 = 100; // Quase todos mais velhos que você
    percentageSameOrYounger2004 = 0;
    message2004 = `No jogos de Atenas 2004, você tinha ${formatAge(ageIn2004)}, uma idade semelhante aos atletas mais jovens, mas ${percentageOlderAthletes2004}% dos atletas eram mais velhos que você.`;
} else if (ageIn2004 >= 18 && ageIn2004 <= 25) {
    percentageOlderAthletes2004 = faixasEtarias2004["26 a 29 anos"] + faixasEtarias2004["30 anos ou mais"];
    percentageSameOrYounger2004 = faixasEtarias2004["18 a 25 anos"];
    message2004 = `No jogos de Atenas 2004, você tinha ${formatAge(ageIn2004)}, e estava na faixa etária mais comum dos atletas dessa edição (entre 18 e 25 anos), mas ${percentageOlderAthletes2004}% dos atletas eram mais velhos que você.`;
} else if (ageIn2004 >= 26 && ageIn2004 <= 29) {
    percentageOlderAthletes2004 = faixasEtarias2004["30 anos ou mais"];
    percentageSameOrYounger2004 = faixasEtarias2004["18 a 25 anos"];
    message2004 = `No jogos de Atenas 2004, você tinha ${formatAge(ageIn2004)}, e mais atletas eram mais novos que você.`;
} else if (ageIn2004 >= 30) {
    percentageOlderAthletes2004 = 0;
    percentageSameOrYounger2004 = 100;
    message2004 = `No jogos de Atenas 2004, você tinha ${formatAge(ageIn2004)}, e apenas 20% dos atletas eram mais velhos que você.`;
}

// Exibir a mensagem final na tela
document.getElementById('athens-2004').textContent = message2004;

    // Revelar as seções
    document.getElementById('athletes-over-30').classList.remove('hidden');
    document.getElementById('previous-years').classList.remove('hidden');
    document.getElementById('age-trend').classList.remove('hidden'); // Revela também a seção de avanço de idades
});
