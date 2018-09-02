//1. Melakukan Looping Menggunakan While

var a=2;

console.log('LOOPING PERTAMA');
while(a<=20) {
    console.log(a+ ' - I love coding')
    a+=2;
}

var b=20;

console.log('LOOPING KEDUA'); 
while(b>=2) {
    console.log(b+ ' - I will become fullstack developer')
    b-=2;
}

//space
console.log('');

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for(var i=1; i<=20; i++){
    console.log(i+ ' - I love coding');
}

console.log('LOOPING KEDUA');
for(var j=20; j>=1; j--) {
    console.log(j+ ' - I will become fullstack developer')
}

//space
console.log('');

//3. Angka Ganjil dan Genap

for(var counter=1; counter<=100; counter++){
    if(counter%2==0){
        console.log('GENAP');
    }
    else {
        console.log('GANJIL');
    }
}

//space
console.log('');

for(var counter3=1; counter3<=100; counter3+=2){
    if(counter3%3==0){
        console.log(counter3+ ' KELIPATAN 3');
    }
}

//space
console.log('');

for(var counter6=1; counter6<=100; counter6+=5){
    if(counter6%6==0){
        console.log(counter6+ ' KELIPATAN 6');
    }
}

//space
console.log('');

for(var counter10=1; counter10<=100; counter10+=9){
    if(counter10%10==0){
        console.log(counter10+ ' KELIPATAN 10');
    }
}