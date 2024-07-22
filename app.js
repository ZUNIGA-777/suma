function sumar() {
    const input1 = document.querySelector('.input1');
    const input2 = document.querySelector('.input2');

    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos');
        return;
    }

    const suma = num1 + num2;

    alert(`El resultado es: ${suma}`);
}