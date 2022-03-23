let numbers = document.querySelectorAll('li');
let numbersArea = document.querySelector('ul');
let submit = document.querySelector('.btn');

let rateNumber = document.querySelector('.rate-number');

let header = document.querySelector('.header');
let ratedResult = document.querySelector('.rated-area');

let ask = document.querySelector('.text-area.ask');
let thanks = document.querySelector('.text-area.thanks');

let backArea = document.querySelector('.back-area');
let backButton = document.querySelector('.back');

let selected;

numbers.forEach(element => {

    element.addEventListener('click', (e)=>{

        for (let x = 0; x < numbers.length; x++) {
            numbers[x].classList.remove('active');
        }

        e.target.classList.add("active");

        selected = parseInt(e.target.innerText);
    })

})


submit.addEventListener('click', ()=>{
    if (selected != undefined) {
        header.style.display = 'none';
        ratedResult.style.display = 'flex';
        submit.style.display = 'none';
        ask.style.display = 'none';
        thanks.style.display = 'block';
        numbersArea.style.display = 'none';
        rateNumber.innerText = selected;
        backArea.style.display = "flex";
    } else {
        alert('Select a number');
    }
})


backButton.addEventListener('click', ()=> {
    selected = undefined;
    header.style.display = 'flex';
    ratedResult.style.display = 'none';
    submit.style.display = 'block';
    ask.style.display = 'block';
    thanks.style.display = 'none';
    numbersArea.style.display = 'flex';
    backArea.style.display = "none";
})