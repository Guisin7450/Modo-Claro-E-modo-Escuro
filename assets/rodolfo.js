document.getElementById('fetchwizards').addEventListener('click', (event) => {
    fetch('https://wizard-world-api.herokuapp.com/wizards')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('card');
            resultDiv.innerHTML = `
                <p><strong>Nome:</strong> ${data.name}</p>
                <p><strong>Sobrenome:</strong> ${data.lastName}</p>
                <p><strong>ID:</strong> ${data.id}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});

document.getElementById('fetchspells').addEventListener('click', (event) => {
    fetch('https://wizard-world-api.herokuapp.com/spells')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('form');
            resultDiv.innerHTML = `
                <p><strong>Nome:</strong> ${data.name}</p>
                <p><strong>Efeito:</strong> ${data.effect}</p>
                <p><strong>Tipo:</strong> ${data.type}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});