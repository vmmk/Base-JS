//1
function getObjFromNum(num) {
    var obj = {};
    if (num < 1 || num > 999) {
        console.log('Введите число от 1 до 999');
        return obj;
    }
    else {
        obj['едининцы'] = num % 10;
        obj['десятки'] = (num - obj['едининцы']) % 100 / 10;
        obj['сотни'] = (num - obj['едининцы'] - obj['десятки'] * 10 ) % 1000 / 100;
        return obj;
    }
}
console.log(getObjFromNum(642));


//2

var cart = [
    {
        name: 'Обсидиан',
        price: 3500,
        amount: 6,
    },
    {
        name: 'Железо',
        price: 1500,
        amount: 13,
    },
    {
        name: 'Платина',
        price: 12000,
        amount: 3,
    },
];
function coastTotal(cart) {
    var total = 0;
    for(var i = 0; i < cart.length; i++) {
        total = total + cart[i].price * cart[i].amount;
    }
    return total;
}
coastTotal(cart);