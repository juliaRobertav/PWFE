// Função para atualizar o valor do campo de entrada e as estatísticas correspondentes
function updateValue(element, increment) {
    const input = element.parentElement.querySelector('.controle-contador');
    const currentValue = parseInt(input.value);
    const newValue = currentValue + increment;
    if (newValue >= 0) {
        input.value = newValue;

        // Atualizar estatísticas
        updateStatistics();
    }
}

// Função para atualizar as estatísticas com os valores dos campos de entrada
function updateStatistics() {
    const estatisticaNumeros = document.querySelectorAll('.estatistica-numero');
    const controleContadores = document.querySelectorAll('.controle-contador');
    
    estatisticaNumeros.forEach((element, index) => {
        element.textContent = controleContadores[index].value;
    });
}

// Adicionar manipuladores de eventos para os botões de ajuste
document.addEventListener('DOMContentLoaded', () => {
    const ajusteBotoes = document.querySelectorAll('.controle-ajuste');
    
    ajusteBotoes.forEach(button => {
        button.addEventListener('click', (event) => {
            const increment = event.target.textContent === '+' ? 1 : -1;
            const parentDiv = button.parentElement;
            updateValue(parentDiv, increment);
        });
    });
});

