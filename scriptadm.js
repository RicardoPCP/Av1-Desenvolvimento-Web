
const input = document.querySelector('.search-box input');


const materias = document.querySelectorAll('section div');

input.addEventListener('keyup', () => {
    const valor = input.value.toLowerCase();

    materias.forEach(materia => {
        const texto = materia.textContent.toLowerCase();

        if (texto.includes(valor)) {
            materia.style.display = "block";
        } else {
            materia.style.display = "none";
        }
    });
    
});
