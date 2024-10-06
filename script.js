// Base de dados: idades e número de atletas por idade (Rio 2016)
const idadesAtletas2016 = {
    13: 2, 14: 11, 15: 23, 16: 117, 17: 183, 18: 264, 19: 501, 20: 620,
    21: 802, 22: 1023, 23: 1071, 24: 1092, 25: 1085, 26: 1020, 27: 1050,
    28: 922, 29: 767, 30: 637, 31: 523, 32: 415, 33: 350, 34: 283, 35: 200,
    36: 164, 37: 119, 38: 65, 39: 55, 40: 58, 41: 40, 42: 34, 43: 32, 44: 24,
    45: 11, 46: 17, 47: 23, 48: 13, 49: 8, 50: 8, 51: 16, 52: 11, 53: 6, 54: 8,
    55: 1, 56: 3, 58: 2, 60: 6, 61: 2, 62: 1
};

let myChartRio2016;
let myChartAtenas2004;

// Função para ajustar o plural ou singular de "anos"
const formatAge = (age) => age === 1 ? "1 ano" : `${age} anos`;

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

    // Exibir o texto personalizado antes do gráfico
    const rioText = `Em 2016, você tinha ${formatAge(ageIn2016)}. Aqui está a comparação entre atletas mais velhos e mais novos que você nos Jogos Olímpicos do Rio 2016:`;
    document.getElementById('rio-2016').textContent = rioText;

    // Verificar e destruir o gráfico anterior, se existir
    if (myChartRio2016) {
        myChartRio2016.destroy();
    }

    const ctxRio = document.getElementById('chartRio2016').getContext('2d');
    myChartRio2016 = new Chart(ctxRio, {
        type: 'bar',
        data: {
            labels: ['Mais Velhos', 'Mais Novos'],
            datasets: [{
                label: '', // Remover o texto "Número de Atletas"
                data: [athletesOlderThanUser2016, athletesYoungerThanUser2016],
                backgroundColor: ['#007bff', '#28a745'],
                borderColor: ['#0056b3', '#218838'],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y', // Transforma o gráfico em horizontal
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false, // Remover a legenda
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });

    // Cálculos para as Olimpíadas de 2004 (Atenas)
    const ageIn2004 = userAge - 20; // Atenas 2004 foi há 20 anos
    let message2004 = '';

    const faixasEtarias2004 = {
        "Entre 13 e 18 anos": 2.4,
        "18 a 25 anos": 46.0,
        "26 a 29 anos": 28.6,
        "30 anos ou mais": 22.9
    };

    // Mensagens personalizadas com base na idade em 2004
    if (ageIn2004 < 0) { 
        message2004 = "Você não tinha nascido em 2004.";
    } else if (ageIn2004 >= 0 && ageIn2004 < 8) {
        message2004 = `Em 2004, você tinha ${formatAge(ageIn2004)}, era muito jovem para se lembrar dos Jogos de Atenas, e todos os atletas eram mais velhos que você.`;
    } else if (ageIn2004 >= 8 && ageIn2004 < 13) {
        message2004 = `Em 2004, você tinha ${formatAge(ageIn2004)}, ou seja, menos idade que todos os atletas da edição Atenas 2004.`;
    } else if (ageIn2004 >= 13 && ageIn2004 < 18) {
        message2004 = `Nos Jogos de Atenas 2004, você tinha ${formatAge(ageIn2004)}, uma idade semelhante aos atletas mais jovens, mas ${faixasEtarias2004["Entre 13 e 18 anos"]}% dos atletas eram mais velhos que você.`;
    } else if (ageIn2004 >= 18 && ageIn2004 <= 25) {
        const percentageOlderAthletes = faixasEtarias2004["26 a 29 anos"] + faixasEtarias2004["30 anos ou mais"];
        message2004 = `Nos Jogos de Atenas 2004, você tinha ${formatAge(ageIn2004)}, e estava na faixa etária mais comum dos atletas dessa edição (entre 18 e 25 anos), mas ${percentageOlderAthletes.toFixed(1)}% dos atletas eram mais velhos que você.`;
    } else if (ageIn2004 >= 26 && ageIn2004 <= 29) {
        message2004 = `Nos Jogos de Atenas 2004, você tinha ${formatAge(ageIn2004)}, e mais atletas eram mais novos que você.`;
    } else if (ageIn2004 >= 30) {
        message2004 = `Nos Jogos de Atenas 2004, você tinha ${formatAge(ageIn2004)}, e apenas ${faixasEtarias2004["30 anos ou mais"]}% dos atletas eram mais velhos que você.`;
    }

    // Exibir o texto personalizado antes do gráfico
    document.getElementById('athens-2004').textContent = message2004;

    // Verificar e destruir o gráfico anterior, se existir
    if (myChartAtenas2004) {
        myChartAtenas2004.destroy();
    }

    const ctxAtenas = document.getElementById('chartAtenas2004').getContext('2d');
    myChartAtenas2004 = new Chart(ctxAtenas, {
        type: 'bar',
        data: {
            labels: Object.keys(faixasEtarias2004),
            datasets: [{
                label: 'Percentual de Atletas',
                data: Object.values(faixasEtarias2004),
                backgroundColor: ['#007bff', '#28a745', '#ffcc00', '#dc3545'],
                borderColor: ['#0056b3', '#218838', '#e6b800', '#c82333'],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false, // Remover a legenda
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(1)}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100 // Percentual máximo de 100%
                }
            }
        }
    });

    // Revelar as seções
    document.getElementById('previous-years').classList.remove('hidden');
    document.getElementById('age-trend').classList.remove('hidden');
    document.getElementById('athletes-over-30').classList.remove('hidden');
});
