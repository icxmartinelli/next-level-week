// Procurar o botão;
document.querySelector('#add-time')
    // Quando clicar no botão;
    .addEventListener('click', cloneField);

// Executar uma ação;  
function cloneField() {
    // Duplicar os campos; Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    // Pega o nó e se for verdade clona

    // Pegar os campos; Quais?
    const fields = newFieldContainer.querySelectorAll('input');
    
    // Para cada campo, limpar;
    fields.forEach(function(field) {
        // Pegar o field do momento e limpa ele;
        field.value = '';
    });
    
    // Colocar na página; Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

// JavaScript Object Notation;