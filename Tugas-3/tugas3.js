//SOAL NOMOR 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kataKedua_new = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);
var kataKeempat_new = kataKeempat.toUpperCase();

var res = kataPertama.concat(' ', kataKedua_new, ' ', kataKetiga, ' ', kataKeempat_new);
console.log(res)
console.log('')


//SOAL NOMOR 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var kataPertama = Number(kataPertama);
var kataKedua = Number(kataKedua);
var kataKetiga = Number(kataKetiga);
var kataKeempat = Number(kataKeempat);

var addition = kataPertama + kataKedua + kataKetiga + kataKeempat
console.log(addition)
console.log('')


//SOAL NOMOR 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 15); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
console.log('')


//SOAL NOMOR 4

var nilai = 90;

if (nilai >= 80) {
    console.log("Indeks nilai: A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indeks nilai: B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("Indeks nilai: C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("Indeks nilai: D")
} else {
    console.log("Indeks nilai: E")
}


//SOAL NOMOR 5

var tanggal = 22;
var bulan = 5;
var tahun = 1999;

switch(bulan) {
    case 1: { bulan = 'Januari'; break; }
    case 2: { bulan = 'Februari'; break; }
    case 3: { bulan = 'Maret'; break; }
    case 4: { bulan = 'April'; break; }
    case 5: { bulan = 'Mei'; break; }
    case 6: { bulan = 'Juni'; break; }
    case 7: { bulan = 'Juli'; break; }
    case 8: { bulan = 'Agustus'; break; }
    case 9: { bulan = 'September'; break; }
    case 10: { bulan = 'Oktober'; break; }
    case 11: { bulan = 'November'; break; }
    case 12: { bulan = 'Desember'; break; }
}

var birthdate = tanggal + ' ' + bulan + ' ' + tahun;
console.log('')
console.log(birthdate);