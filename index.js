//numbers//
const onebtn = document.querySelector('.one__button');
const twobtn = document.querySelector('.two__button');
const threebtn = document.querySelector('.three__button');
const fourbtn = document.querySelector('.four__button');
const fivebtn = document.querySelector('.five__button');
const sixbtn = document.querySelector('.six__button');
const sevenbtn = document.querySelector('.seven__button');
const eightbtn = document.querySelector('.eight__button');
const ninebtn = document.querySelector('.nine__button');
const zerobtn = document.querySelector('.zero__button');
const Ibtn = document.querySelector('.I__button');
const Vbtn = document.querySelector('.V__button');
const Xbtn = document.querySelector('.X__button');
//operations//
const plusbtn = document.querySelector('.plus__button');
const minusbtn = document.querySelector('.minus__button');
const multiplybtn = document.querySelector('.multiply__button');
const dividebtn = document.querySelector('.divide__button');
//fields//
const enterfield = document.querySelector('.first__field');
const operationfield = document.querySelector('.operation__field');
const resultfield = document.querySelector('.second__field');
//result//
const dropbtn = document.querySelector('.drop__button');
const resultbtn = document.querySelector('.result__button');
//roman//
const i = 1;
const iv = 4;
const v = 5;
const ix = 9;
const x = 10;
let roman = false;
//start
let a = 0;
let b = 0;
let c = 0;
let operation = null;

//numbers-buttons//
onebtn.addEventListener('click', function enterone() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '1';
        b = b + '1';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '1';
        a = a + '1';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
twobtn.addEventListener('click', function entertwo() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '2';
        b = b + '2';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '2';
        a = a + '2';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
threebtn.addEventListener('click', function enterthree() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '3';
        b = b + '3';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '3';
        a = a + '3';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
fourbtn.addEventListener('click', function enterfour() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '4';
        b = b + '4';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '4';
        a = a + '4';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
fivebtn.addEventListener('click', function enterfive() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '5';
        b = b + '5';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '5';
        a = a + '5';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
sixbtn.addEventListener('click', function entersix() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '6';
        b = b + '6';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '6';
        a = a + '6';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
sevenbtn.addEventListener('click', function enterseven() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '7';
        b = b + '7';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '7';
        a = a + '7';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
eightbtn.addEventListener('click', function entereight() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '8';
        b = b + '8';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '8';
        a = a + '8';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
ninebtn.addEventListener('click', function enternine() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '9';
        b = b + '9';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '9';
        a = a + '9';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
zerobtn.addEventListener('click', function enterzero() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + '0';
        b = b + '0';
        console.log('b =')
        console.log(b)
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + '0';
        a = a + '0';
        console.log('a =')
        console.log(a)
        console.log(parseInt(a))
    }
})
Ibtn.addEventListener('click', function enterI() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + 'I';
        b = b + i;
        console.log('b =')
        console.log(parseInt(b))
        if (b === 4) {
            resultfield.innerText = 'IV';
        }
        if (b === 5) {
            resultfield.innerText = 'V';
        }
        if (b === 9) {
            resultfield.innerText = 'IX';
        }
        if (b === 10) {
            resultfield.innerText = 'X';
        }
    } else {
        enterfield.innerText = enterfield.innerText + 'I';
        a = a + i;
        console.log('a =')
        console.log(parseInt(a))
    }
    if (a === 4) {
        enterfield.innerText = 'IV';
    }
    if (a === 5) {
        enterfield.innerText = 'V';
    }
    if (a === 9) {
        enterfield.innerText = 'IX';
    }
    if (a === 10) {
        enterfield.innerText = 'X';
    }
    roman = true;
})
Vbtn.addEventListener('click', function enterV() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + 'V';
        b = b + v;
        console.log('b =')
        console.log(parseInt(b))
        if (b === 10) {
            resultfield.innerText = 'X';
        }
    } else {
        enterfield.innerText = enterfield.innerText + 'V';
        a = a + v;
        console.log('a =')
        console.log(parseInt(a))
        if (a === 10) {
            enterfield.innerText = 'X';
        }
    }
    roman = true;
})
Xbtn.addEventListener('click', function enterX() {
    if (operation !== null) {
        resultfield.innerText = resultfield.innerText + 'X';
        b = b + x;
        console.log('b =')
        console.log(parseInt(b))
    } else {
        enterfield.innerText = enterfield.innerText + 'X';
        a = a + x;
        console.log('a =')
        console.log(parseInt(a))
    }
    roman = true;
})
//operation-buttons//
plusbtn.addEventListener('click', function plus() {
    operation = '+'
    console.log(operation);
    operationfield.innerText = '+'
})
minusbtn.addEventListener('click', function minus() {
    operation = '-'
    console.log(operation);
    operationfield.innerText = '-'
})
multiplybtn.addEventListener('click', function multiply() {
    operation = '*'
    console.log(operation);
    operationfield.innerText = '*'
})
dividebtn.addEventListener('click', function divide() {
    operation = '/'
    console.log(operation);
    operationfield.innerText = '/'
})
//result-buttons//
resultbtn.addEventListener('click', function result() {
    if (operation === '+') {
        enterfield.innerText = '=' + ' ' + (c + parseInt(a) + parseInt(b))
        c = c + parseInt(a) + parseInt(b)
    }
    if (operation === '-') {
        enterfield.innerText = '=' + ' ' + (c + parseInt(a) - parseInt(b))
        c = c + parseInt(a) - parseInt(b)
    }
    if (operation === '*') {
        enterfield.innerText = '=' + ' ' + ((c + parseInt(a)) * parseInt(b))
        c = (c + parseInt(a)) * parseInt(b)
    }
    if (operation === '/') {
        enterfield.innerText = '=' + ' ' + ((c + parseInt(a)) / parseInt(b))
        c = (c + parseInt(a)) / parseInt(b)
    }
    if (operation === '/' && b === 0) {
        enterfield.innerText = 'На ноль делить нельзя'
        c = 0;
        console.log('ноль')
    }
    console.log(roman)
    if (roman === true) {
        if (c === 2) {
            enterfield.innerText = '=' + ' ' + 'II';
        }
        if (c === 3) {
            enterfield.innerText = '=' + ' ' + 'III';
        }
        if (c === 4) {
            enterfield.innerText = '=' + ' ' + 'IV';
        }
        if (c === 5) {
            enterfield.innerText = '=' + ' ' + 'V';
        }
        if (c === 6) {
            enterfield.innerText = '=' + ' ' + 'VI';
        }
        if (c === 7) {
            enterfield.innerText = '=' + ' ' + 'VII';
        }
        if (c === 8) {
            enterfield.innerText = '=' + ' ' + 'VIII';
        }
        if (c === 9) {
            enterfield.innerText = '=' + ' ' + 'IX';
        }
        if (c === 10) {
            enterfield.innerText = '=' + ' ' + 'X';
        }
    }
    a = 0;
    b = 0;
    resultfield.innerText = null;
    operationfield.innerText = null;
    console.log('c =')
    console.log(c)
})
dropbtn.addEventListener('click', function drop() {
    a = 0;
    b = 0;
    c = 0;
    roman = false;
    operation = null;
    enterfield.innerText = null;
    operationfield.innerText = null;
    resultfield.innerText = null;
    console.log('Сброс')
})



