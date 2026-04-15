const cursos = {
    'enfermagem': 'enfermagem.html',
    'técnico em enfermagem': 'enfermagem.html',
    'informatica': 'informatica.html',
    'informática': 'informatica.html',
    'técnico em informática': 'informatica.html',
    'mecanica': 'Mecanica.html',
    'mecânica': 'Mecanica.html',
    'técnico em mecânica': 'Mecanica.html',
    'logistica': 'Logistica.html',
    'logística': 'Logistica.html',
    'técnico em logística': 'Logistica.html',
    'alimentos': 'Técnico_em_Alimentos.html',
    'técnico em alimentos': 'Técnico_em_Alimentos.html',
    'administracao': 'ADM.html',
    'administração': 'ADM.html',
    'técnico em administração': 'ADM.html',
    'eletrotecnica': 'eletrotecnica.html',
    'eletrotécnica': 'eletrotecnica.html',
    'técnico em eletrotécnica': 'eletrotecnica.html'
};

// Função para fazer a busca
function fazerBusca() {
    const termoBusca = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (termoBusca === '') {
        alert('Por favor, digite o nome de um curso.');
        return;
    }

    if (cursos[termoBusca]) {
        window.location.href = cursos[termoBusca];
    } else {
        alert('Curso não encontrado. Tente: Enfermagem, Informática, Mecânica, Logística, Alimentos, Administração ou Eletrotécnica.');
    }
}

// Evento do botão de pesquisa
document.getElementById('search-button').addEventListener('click', fazerBusca);

// Evento ao pressionar Enter
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fazerBusca();
    }
});
