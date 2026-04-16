const cursos = {
    'enfermagem': 'materias/enfermagem.html',
    'técnico em enfermagem': 'materias/enfermagem.html',
    'informatica': 'materias/informatica.html',
    'informática': 'materias/informatica.html',
    'técnico em informática': 'materias/informatica.html',
    'mecanica': 'materias/Mecanica.html',
    'mecânica': 'materias/Mecanica.html',
    'técnico em mecânica': 'materias/Mecanica.html',
    'logistica': 'materias/Logistica.html',
    'logística': 'materias/Logistica.html',
    'técnico em logística': 'materias/Logistica.html',
    'alimentos': 'materias/Técnico_em_Alimentos.html',
    'técnico em alimentos': 'materias/Técnico_em_Alimentos.html',
    'administracao': 'materias/ADM.html',
    'administração': 'materias/ADM.html',
    'técnico em administração': 'materias/ADM.html',
    'eletrotecnica': 'materias/eletrotecnica.html',
    'eletrotécnica': 'materias/eletrotecnica.html',
    'técnico em eletrotécnica': 'materias/eletrotecnica.html'
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
