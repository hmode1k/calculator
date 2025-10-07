const display = document.querySelector('#display');

let numberBtns = document.querySelectorAll('.number-btn');
let operatorBtns = document.querySelectorAll('.operator-btn');
let clearBtn = document.querySelector('#clear-btn');
let equalBtn = document.querySelector('#equal-btn');
let delBtn = document.querySelector('#delete-btn');
let dotBtn = document.querySelector('#dot-btn');
let dotBool = false;

let number1 = '';
let number2 = '';
let operator = '';

dotBtn.addEventListener('click', () => {
    if (!dotBool) {
        if (number1 !== '' && operator === '') {
            number1 = number1 + '.';
            display.innerHTML = number1;
        }
        else {
            number2 = number2 + '.';
            display.innerHTML = number1 + ' ' + operator + ' ' + number2;
        }
    }
})


clearBtn.addEventListener('click', () => {
    display.innerHTML = '';
    number1 = '';
    number2 = '';
    operator = '';
})

delBtn.addEventListener('click', () => {
    deleteNum();
})


numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        bufferNumber(btn.innerHTML);
    })
})

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        selectOperator(btn.innerHTML);
    })
})

function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function suntract(num1, num2) {
    let sum = num1 - num2;
    return sum;
}

function multiply(num1, num2) {
    let sum = num1 * num2;
    return sum;
}

function divide(num1, num2) {
    let sum = num1 / num2;
    return sum;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return suntract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}


function bufferNumber(num) {
    if (operator === '') {
        number1 = number1 + num;
        display.innerHTML = number1;
    }
    else {
        number2 = number2 + num;
        display.innerHTML = number1 + ' ' + operator + ' ' + number2;
    }


}

function selectOperator(op) {
    if (operator === '') {
        operator = op;
        display.innerHTML = number1 + ' ' + operator;
    }
    else {
        let res = operate(operator, parseFloat(number1), parseFloat(number2));
        operator = op;
        number1 = res;
        number2 = '';
        display.innerHTML = number1 + ' ' + operator;
    }
}


equalBtn.addEventListener('click', () => {
    if (operator === '') {
        return;
    }
    else {
        let res = operate(operator, parseFloat(number1), parseFloat(number2));
        number1 = res;
        display.innerHTML = number1;
        operator = '';
        number2 = '';
    }
})

function deleteNum() {
    if (operator === '') {
        let number = number1.toString();
        let n = number.slice(0, -1);
        number1 = n;
        display.innerHTML = number1;
    }
    else {
        if (number2 === '') {
            operator = '';
            display.innerHTML = number1;
        }
        else {
            let number = number2.slice(0, -1);
            number2 = number;
            display.innerHTML = number1 + ' ' + operator + ' ' + number2;
        }
    }
}