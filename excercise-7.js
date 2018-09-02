//1. Menyusun Barisan Bintang

for (var rows = 1; rows <= 5; rows++) {
    console.log('*')
}

//space
console.log('');

//2.Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5
var symbol = ''

for (var i = 1; i <= rows2; i++) {
    symbol = ''
    for (var j = 1; j <= rows2; j++) {
        symbol = symbol + '*'
    }
    console.log(symbol)
}

//space
console.log('');

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows2 = 5
var symbol = ''

for (var i = 1; i <= rows2; i++) {

    for (var j = 1; j <= 1; j++) {
        symbol = symbol + '*'
    }
    console.log(symbol)
}