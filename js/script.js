var result = document.querySelector(".result span");
let numbers = document.querySelectorAll(".number");
let signs = document.querySelectorAll(".sign");

var clear = document.querySelector(".clear");
var negative = document.querySelector(".negative");
console.log(negative)
let percent = document.querySelector(".percent");

let division = $(".division");
var addition = $(".addition");
var subtraction = $(".subtraction");

var comma = document.querySelector(".comma");
var equals = document.querySelector(".equals");

var x = new Date();
var hour = document.querySelector(".hour").innerHTML = x.getHours();
var minute = document.querySelector(".minute").innerHTML = x.getMinutes();




let firstValue =""; 
let isFirstValue =false;
let secondValue ="";
let isSecondValue = false;
let sign ="";
let resultValue = 0;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let art = e.target.getAttribute("value");

        if(isFirstValue === false){
            getFirstValue(art);
            
        }
        if(isSecondValue === false){
            getSecondValue(art);
            
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue = firstValue + el;
    result.innerHTML = firstValue ;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if (firstValue != "" && sign != ""){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getsign() {
    for(let i = 0; i < signs.length; i++ ){
    signs[i].addEventListener('click', (e)=> {
        sign = e.target.getAttribute('value');
        isFirstValue = true;
    })
    }
}
getsign()


equals.addEventListener('click',  () => {
    result.innerHTML = "";

    if (sign == '+'){
        resultValue = firstValue + secondValue;
    }else if (sign == '-'){
        resultValue = firstValue - secondValue;
    }else if (sign == '×'){
        resultValue = firstValue * secondValue;
    }else if (sign == '/'){
        resultValue = firstValue / secondValue;
    }

    result.innerHTML =resultValue;
    firstValue =resultValue;
    secondValue = "";


});


function clickResultLength(){
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
        
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
})

comma.addEventListener('click', () => {

})

percent.addEventListener("click", () => {
    result.innerHTML = "";

    if(firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
})


clear.addEventListener("click" , () => {
    result.innerHTML = 0;


    firstValue =""; 
    isFirstValue =false;
    secondValue ="";
    isSecondValue = false;
    sign ="";
    resultValue = 0;

})















