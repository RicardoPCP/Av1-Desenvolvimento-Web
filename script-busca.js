const cursos = {
    'enfermagem': 'curso-enfermagem.html',
    'técnico em enfermagem': 'curso-enfermagem.html',
    'informatica': 'curso-informatica.html',
    'informática': 'curso-informatica.html',
    'técnico em informática': 'curso-informatica.html',
    'mecanica': 'curso-mecanica.html',
    'mecânica': 'curso-mecanica.html',
    'técnico em mecânica': 'curso-mecanica.html',
    'logistica': 'curso-logistica.html',
    'logística': 'curso-logistica.html',
    'técnico em logística': 'curso-logistica.html',
    'alimentos': 'curso-alimentos.html',
    'técnico em alimentos': 'curso-alimentos.html',
    'administracao': 'curso-administracao.html',
    'administração': 'curso-administracao.html',
    'técnico em administração': 'curso-administracao.html',
    'eletrotecnica': 'curso-eletrotecnica.html',
    'eletrotécnica': 'curso-eletrotecnica.html',
    'técnico em eletrotécnica': 'curso-eletrotecnica.html'
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
