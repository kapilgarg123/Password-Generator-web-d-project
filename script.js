console.log("this is the password generator web");

// variables
const len = document.getElementById('inputnumber');
const GP = document.getElementById('submit');
const display = document.getElementById('passwordHolder');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const check3 = document.getElementById('check3');
const check4 = document.getElementById('check4');
var a = "hi";
var b = "";
var c = "";
var d = "";
// var length = len.value;
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbol = "!@#$%^&*_+=-";
let p1, p2, p3, p4;
let totalcheck;
var output = "";

GP.addEventListener('click', () => {
    display.value = "";
    output = "";
    // console.log(len.value);
    a = check1.checked;
    a = (a) ? "1" : "0";
    b = check2.checked;
    b = (b) ? "1" : "0";
    c = check3.checked;
    c = (c) ? "1" : "0";
    d = check4.checked;
    d = (d) ? "1" : "0";

    totalcheck = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);

    if (totalcheck > len.value) {
        output = 'ERROR'
        display.value = 'ERROR';
    }
    else {
        if (parseInt(a) == 1) {
            var x = "";
            const localvar = parseInt(Math.random() * (len.value - totalcheck + 1)) + 1;
            console.log(localvar);
            for (let index = 0; index < localvar; index++) {
                output = output + uppercase[parseInt(Math.random() * 26)];
            }
            totalcheck = totalcheck - 1;
            if (totalcheck == 0 && output.length != len.value) {
                for (let index = 0; index < len.value - output.length; index++) {
                    x = x + uppercase[parseInt(Math.random() * 26)]
                }
            }
            output = output + x;
        }

        if (parseInt(b) == 1) {
            var x = "";
            const localvar = parseInt(Math.random() * ((len.value - output.length) - (totalcheck - 1))) + 1;
            console.log(localvar);
            for (let index = 0; index < localvar; index++) {
                output = output + lowercase[parseInt(Math.random() * 26)];
            }
            totalcheck = totalcheck - 1;
            if (totalcheck == 0 && output.length != len.value) {
                for (let index = 0; index < len.value - output.length; index++) {
                    x = x + lowercase[parseInt(Math.random() * 26)]
                }
            }
            output = output + x;
        }

        if (parseInt(d) == 1) {
            var x = "";
            const localvar = parseInt(Math.random() * ((len.value - output.length) - (totalcheck - 1))) + 1;
            console.log(localvar);
            for (let index = 0; index < localvar; index++) {
                output = output + symbol[parseInt(Math.random() * 12)];
            }
            totalcheck = totalcheck - 1;
            if (totalcheck == 0 && output.length != len.value) {
                for (let index = 0; index < len.value - output.length; index++) {
                    x = x + symbol[parseInt(Math.random() * 12)]
                }
            }
            output = output + x;
        }

        if (parseInt(c) == 1) {
            var x = "";
            const localvar = parseInt(Math.random() * ((len.value - output.length) - (totalcheck - 1))) + 1;
            console.log(localvar);
            for (let index = 0; index < localvar; index++) {
                output = output + numbers[parseInt(Math.random() * 10)];
            }
            totalcheck = totalcheck - 1;
            if (totalcheck == 0 && output.length != len.value) {
                for (let index = 0; index < len.value - output.length; index++) {
                    x = x + numbers[parseInt(Math.random() * 10)]
                }
            }
            output = output + x;
        }
    }
    display.value = output;
})