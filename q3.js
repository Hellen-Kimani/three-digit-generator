const listedNumbers = document.querySelector('.list');

let x = 1000;
const numbers = () => {
    while ( x <= 1000 && x >= 101){
        x = x-1;
        console.log(x);
        const list = `<li>${x}</li>`;
        listedNumbers.insertAdjacentHTML('beforeend', list)
    }
    ;
}
;

const button = document.querySelector('.generate-btn');
button.addEventListener('click', numbers);