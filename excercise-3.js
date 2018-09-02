var nama = 'Zero';
var peran = 'Penyihir';

if (nama == '' && peran == ''){
    console.log('Nama harus diisi!');
}
else if (nama !== '' && peran ==''){
    console.log('Halo ' +nama+ ', Pilih peranmu untuk memulai game!' );
}
else {
    console.log('Selamat datang di Dunia Proxytia, ' +nama);
    switch (peran) {
        case 'Ksatria': {
            console.log('Halo ' +peran , nama+ ', kamu dapat menyerang dengan senjatamu!');
            break;
        }
        case 'Tabib': {
            console.log('Halo ' +peran , nama+ ', kamu akan membantu temanmu yang terluka!');
            break;
        }
        case 'Penyihir': {
            console.log('Halo ' +peran , nama+ ', ciptakan keajaiban yang membantu kemenanganmu!');
            break;
        }
        default: {
            console.log('Silahkan pilih peranmu untuk mulai berpetualang');
        }
        
    }
}