//1
console.log("Hello I`m");
//2
console.log("Червоний");
console.log("Оранжевий");
console.log("Жовтий");
console.log("Зелений");
console.log("Блакитний");
console.log("Синій");
console.log("Фіолетовий");
//3
var m = 5, n = 3, r = 2;
console.log(m + "*" + n + " + " + r + " = " + (m * n + r));
//4
var p = 15;
time(p);
p = 45;
time(p);
function time(p) {
    if (p <= 30) {
        console.log('Перша половина години');
    }
    else {
        console.log('Друга половина години');
    }
}
//5
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.group();
for (var i = 0; i < 20; i++)
    console.log(i + 1 + "    =>     " + getRandomIntInclusive(50, 100));
console.groupEnd();
//6
var arr = [];
for (var i = 1; i <= 1024; i *= 2)
    arr.push(i);
console.log(arr);
//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
//Задача 1
var a = 5, b = -4, c = 8;
function findMin(a, b, c) {
    console.log(Math.min(a, b, c));
}
findMin(a, b, c);
//Задача 2
function maxDigit(n) {
    if (n == 0) {
        return 0;
    }
    else {
        var ost = n % 10;
        return Math.max(ost, maxDigit((n - ost) * 1e-1));
    }
}
console.log(maxDigit(16984));
//Задача 3
var str = "Hello, (text) world!";
console.log(str.replace(/\s*\(.*?\)\s*/g, ''));
//Задача 4
function mask(value) {
    var str = "+38 (" + value.substring(0, 3) + ") " + value.substring(3, 6) + "-" + value.substring(6, 8) + "-" + value.substring(8, 10);
    console.log(str);
}
mask("0682091234");
//Задача 5
var myArray = [4, -5, 0, 2, -67, 8, 10, -34];
function getNegativeNumbers(array) {
    var negatives = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives;
}
console.log(getNegativeNumbers(myArray).length);
//Задача 6
function Create2DArray() {
    var arr = [];
    for (var i = 0; i < 5; i++) {
        arr.push([]);
    }
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            arr[i][j] = Math.pow(i + 1, 2) + Math.pow(j + 1, 2);
        }
    }
    console.log(arr);
}
Create2DArray();
