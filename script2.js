//1
alert("1) c = ++a = 2, так как префиксная форма и а=2 уже в выражении.  2) d = b++ = 1, так как постфиксная форма, b становится =2 после выражения.  3) c = (2+ ++a)= 5, т.к. префиксная и а=3.  4) d = (2+ b++) = 4, т.к. опостфискная и в выражение b=2, а b=3 после подсчета. теперь оба значения (последние 2 алерта вывода а и б) a & b равны 3  ");

//2
var a = 2;
var x = 1 + (a *= 2);
alert("х= " + x + ". т.к. в скобках значение а становится равным 4");

//3
var a = +prompt("Введите значение а");
var b = +prompt("Введите значение b");
 if (a >= 0 && b >= 0 ) { 
     alert(a - b);
 } 
else if (a < 0 && b < 0) {
    alert(a * b);
 } 
else {
    alert(a + b);
 }

//4
var a,
    masiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function input_a() {
    a = prompt("Введите число от 1 до 15");
    if (a < 1 || a > 15 ) {
        input_a();
  }
}
input_a();
switch(a) {
    case 1:
        alert(masiv);
        break;
    case 15:
        alert(a);
        break;
    default:
        alert(masiv.slice(a-1));
}

//5
var a = +prompt("Введите значение а");
var b = +prompt("Введите значение b");
function pls(a, b) {
    return a + b;
}
function mns(a, b) {
    return a - b;
}
function del(a, b) {
    return a / b;
}
function ymnzh(a, b) {
    return a * b;
}
alert("Сложение: " + pls(a, b));
alert("Вычитание: " + mns(a, b));
alert("Деление: " + del(a, b));
alert("Умножение: " + ymnzh(a, b));

//6
var arg1 = +prompt("Введите первый аргумент");
var arg2 = +prompt("Введите второй аргумент");
var operation = prompt("Введите операцию (+,-,/,*)");
function mathOperation ( arg1, arg2, operation ) { 
    switch (operation) { 
        case '+': 
            return pls(arg1, arg2); 
            break; 
        case '-': 
            return mns(arg1, arg2); 
            break; 
        case '/': 
            return del(arg1, arg2); 
            break; 
        case '*': 
            return ymnzh(arg1, arg2); 
            break; 
    } 
} 
alert(" Резуьтат: " + mathOperation ( arg1, arg2, operation ));

//*8
var val = +prompt("Введите число");
var pow = +prompt("Введите степень");
function power(val,pow) { 
    if ( pow === 0 ) { 
        return 1;
    }
    else {
        return val * power(val,pow - 1);
    }
}
alert("Результат: "  + power(val,pow));
