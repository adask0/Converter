const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahrenheit
let celsius


const swap = () => {
    if(one.textContent === '°C'){
        one.textContent = "°F";
        two.textContent = "°C"
    }else{
        one.textContent = "°C";
        two.textContent = "°F";
    }
}

const fahr = () => {
    fahrenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
    converter.value = '';
}

const cel = () => {
    celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
    converter.value = '';
}

const conv = () => {
    if (converter.value !== '') {
        if(one.textContent === '°C'){
            fahr();
        } else{
            cel();
        }
    } else {
        result.textContent = 'Musisz podać jakąś wartość!';
    }
}

const reset = () => {
    result.textContent = '';
    converter.value = '';
}

resetBtn.addEventListener('click', reset);

convBtn.addEventListener('click', conv);

changeBtn.addEventListener('click', swap);