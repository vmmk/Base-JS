//1
function isPrime(num) {
    if(num < 2) {
        return false;   
    } 
    var i = 2;
    while(i < num) {
        if(num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}
var i = 0;
var prime = [];
while(i <= 100) {
    if(isPrime(i)) {
        prime.push(i);
    }
    i++;
}
alert("Простые числа от 0 до 100 : " + prime);


//2
var cart = [
    ['Iphone', 2, 45000],
    ['Samsung', 1, 35000],
    ['Vertu', 3, 55000],
    ['Huawei', 6, 20000],
]
function rasschet(cart) {
    var total = 0;
    for(var i = 0; i < cart.length; i++) {
        total = total + cart[i][1] * cart[i][2];
    }
    return total;
}
rasschet(cart);
alert("Общая стоимость корзины : " + rasschet(cart) + " рублей");



//3 Хотелось бы уточнить, массив должен быть напримере второго задания, или нужно грубо говоря создать массив в котором будут храниться ещё массивы? То есть создание массива tovar = [nazv,cena,kolvo] и потом создать массив из этих товаров? (basket = [tovar];) Потому что иначе я не понимаю разницу со вторым заданием, а как по другому реализовать пока в голову не пришло


//4*

for ( var i = 0; i < 10; alert(i++) ) {} 