
let numbers = document.querySelectorAll(".angka-digit");
let num = "";
let firstNumber = "";
let currentOperator = ""; 
let result = document.querySelector("#hasil");
let justCalculated = false;
result.innerHTML = 0;

// Mengambil fungsi angka digit
numbers.forEach(number =>{
    number.addEventListener("click", () =>{

        if( justCalculated ) {
            num = "";
            firstNumber = "";
            currentOperator = "";
            equal = "";
            justCalculated = false;
        }

        num = num + number.value
        document.querySelector("#hasil").innerHTML = num;
    })
})

// mengambil operator
let operators = document.querySelectorAll(".operan");
operators.forEach(operan =>{

    operan.addEventListener("click", () =>{
        if( justCalculated == true ) {
            justCalculated = false; 
            firstNumber = equal; 
        } else { 
            if( currentOperator && num ) {
                calculate()
                firstNumber = equal
            } else if( !currentOperator ) {
                firstNumber = num;
            }
        }
        
        num = "";
        currentOperator = operan.value
    });
});


// Menampilkan pada kalkulator
let equal = "";
const hasil = document.getElementById("equal")
hasil.addEventListener("click", ()=> {
    
    calculate();
    num = "";
    result.innerHTML = equal;
    justCalculated = true;

})

// fungsi menghitung 
function calculate() {
    firstNumber = Number(firstNumber);
    num = Number(num);

    if( currentOperator == "+") {
        equal = firstNumber + num;
    } else if( currentOperator == "-" ) {
        equal = firstNumber - num;
    } else if ( currentOperator == "*" ) {
        equal = firstNumber * num;
    } else if( currentOperator == "/" ) {
        equal = firstNumber / num;
    };
}

// Fungsi clear
const clear = document.querySelector("#clear");
clear.addEventListener("click", ()=> {
    num = "";
    firstNumber = "";
    currentOperator = "";
    equal = "";


    result.innerHTML = 0
});

// Mengambil desimal
const desimal = document.querySelector("#decimal");
desimal.addEventListener("click", ()=> {
    
    if( num.includes(".") ) {
        num = num
    } else {
        num = num + "."
    }

    result.innerHTML = num;
})