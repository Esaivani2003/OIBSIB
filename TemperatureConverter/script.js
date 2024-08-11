function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const tempUnit = document.getElementById('tempUnit').value;
    const resultElement = document.getElementById('result');

    if (isNaN(tempInput)) {
        resultElement.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (tempUnit === "celsius") {
        celsius = tempInput;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (tempUnit === "fahrenheit") {
        fahrenheit = tempInput;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (tempUnit === "kelvin") {
        kelvin = tempInput;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    resultElement.innerHTML = 
        `${tempInput}°${tempUnit.charAt(0).toUpperCase()} is equal to ` +
        `${celsius.toFixed(2)}°C,<br> ${fahrenheit.toFixed(2)}°F, <br> ${kelvin.toFixed(2)}K.`;
}