///////////random pin genareat ////////////

function getPin (){
   const pin = randomPin();
    const pinString = pin + '';

    if(pinString.length === 4){
        return pin;
    }
    else{

        return getPin();
    }
}

// randome pin
function randomPin(){
    const random = Math.round(Math.random() *10000);
    return random ;
} 


/////////////genarate pin///////////////////

document.getElementById('generate-pin').addEventListener('click', function(){
   
    const pin = getPin();

    const generateField = document.getElementById('display-pin')
    generateField.value = pin;
});




document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;

    const numberField = document.getElementById('typed-numbers');
    const previousNumber= numberField.value;
    if(isNaN(number)){
       if(number === 'C'){
    numberField.value = '';
}
else if (number === '<'){
    const digits = previousNumber.split('');
    digits.pop();
    const remainingDigits = digits.join('');
    numberField.value = remainingDigits;
}
    }
   
    else{
        const newNumber = previousNumber + number;
        numberField.value = newNumber
    }

})

// compaire value

document.getElementById('verify-pin').addEventListener('click', function (){
    const generateField =document.getElementById('display-pin')
    const currentPin = generateField.value;

    const numberField = document.getElementById('typed-numbers');
     const newNumber = numberField.value

     const pinSuccess = document.getElementById('pin-success')
     const pinFailure = document.getElementById('pin-failure')

     if(currentPin === newNumber){
        pinSuccess.style.display = 'block'
        pinFailure.style.display = 'none'
     }
     else{
        pinFailure.style.display = 'block'
        pinSuccess.style.display = 'none'
     }
});