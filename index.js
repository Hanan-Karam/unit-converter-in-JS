const inputElement = document.getElementById('input');
const displayedUnit = document.querySelector('.initial-unit');
const unit = document.getElementsByClassName('start-unit');
const feet = document.querySelector('.feet');
const meter = document.querySelector('.meter');
const gallon = document.querySelector('.gallon');
const liter = document.querySelector('.liters');
const pound = document.querySelector('.pound');
const kilograms = document.querySelector('.kilograms');

inputElement.addEventListener('change', (event) => {
    let input = event.target.value;
    //console.log(input);
    if(isNaN(input)){
        displayedUnit.textContent = "Please Add A Valid Number!";
        displayedUnit.style.color = "yellow";
        displayedUnit.style.fontSize = "40px";

    }else{
        //console.log("success")
        displayedUnit.textContent = input;
        displayedUnit.style.color = "white";
        displayedUnit.style.fontSize = "60px";

        for(let i = 0; i < unit.length; i++){
            unit[i].textContent = input;
        }

        feet.textContent = (input*3.2808).toFixed(2);
        meter.textContent = (input*0.3048).toFixed(2);
        pound.textContent = (input*2.205).toFixed(2);
        kilograms.textContent = (input*0.4536).toFixed(2);
        liter.textContent = (input*3.7854).toFixed(2);
        gallon.textContent = (input*0.2642).toFixed(2);
        inputElement.value = "";
    }
})
