const form = document.getElementById('currency-form');
const resultDiv = document.getElementById('result');

// Tu API key aquí (usa ExchangeRate-API)
const API_KEY = 'faa585d73ae615a7639e8f47';

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que la página se recargue

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Verificamos que el monto sea válido
    if (isNaN(amount) || amount <= 0) {
        showMessage('Por favor ingresa un monto válido.', 'alert-danger');
        return;
    }

    // Construir la URL dinámicamente con la moneda base seleccionada
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

    // Llamada a la API para obtener el tipo de cambio
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            if (!data.conversion_rates) {
                showMessage('Error al obtener los tipos de cambio.', 'alert-danger');
                return;
            }

            const fromRate = data.conversion_rates[fromCurrency]; // Tasa de la moneda base (fromCurrency)
            const toRate = data.conversion_rates[toCurrency];     // Tasa de la moneda destino (toCurrency)

            // Si no se encuentran las monedas
            if (!fromRate || !toRate) {
                showMessage('Moneda no disponible.', 'alert-danger');
                return;
            }

            // Convertir el monto
            const convertedAmount = (amount * toRate).toFixed(2);

            // Mostrar el resultado
            showMessage(`${amount} ${fromCurrency} equivale a ${convertedAmount} ${toCurrency}.`, 'alert-success');
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Hubo un error en la conversión.', 'alert-danger');
        });
});

// Función para mostrar mensajes (resultados o errores)
function showMessage(message, alertType) {
    resultDiv.classList.remove('d-none', 'alert-danger', 'alert-success');
    resultDiv.classList.add(alertType);
    resultDiv.textContent = message;
}
