document.addEventListener('DOMContentLoaded', (event) => {
    
    let value = 0;
    const valueElement = document.getElementById('value');
    valueElement.innerHTML = value;
    const buttonAdd = document.getElementById('addButton');
    const buttonMult = document.getElementById('multButton');

    buttonAdd.addEventListener('click', () => {
        value++;
        valueElement.textContent = value;
    });

    buttonMult.addEventListener('click', () => {
        value *= 2;
        valueElement.textContent = value;
    });
});

