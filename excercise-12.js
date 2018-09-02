function konversiMenit(menit) {
    
    var a = menit%60;
    var b = (menit - a)/60;
    
    if (String(a).length === 1){
        return b+':'+'0'+a;
    } 
    else {
        return b+':'+a;
    }
    
  }

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00