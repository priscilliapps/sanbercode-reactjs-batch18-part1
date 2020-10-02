//NOMOR 1

function halo() {
    console.log("Halo Sanbers!");
}

halo(); // "Halo Sanbers!" 


//NOMOR 2

function kalikan(angka1, angka2) {
    return angka1 * angka2;
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48


//NOMOR 3

function introduce(nama, umur, alamat, hobi) {
    console.log("Nama saya " + nama + ", umur saya " + umur + ", alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi)
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)


//NOMOR 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenisKelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}

console.log(objDaftarPeserta)


//NOMOR 5

var dataBuah = [
    {nama : "Strawberry", warna : "Merah", biji : "Tidak", harga : 9000}, 
    {nama : "Jeruk", warna : "Oranye", biji : "Ada", harga : 8000},
    {nama : "Semangka", warna : "Hijau & Merah", biji : "Ada", harga : 10000},
    {nama : "Pisang", warna : "Kuning", biji : "Tidak", harga : 5000}
]

//var filterBuah = dataBuah.filter(function(e) {
//    return e.nama == "Strawberry";
//})
//console.log(filterBuah)

console.log(dataBuah[0])


//NOMOR 6

var dataFilm = []

function addFilm (name, duration, type, year) {
    var inputFilm = {
        nama : name,
        durasi : duration,
        genre : type,
        tahun : year,
    }
    dataFilm.push(inputFilm)
}

var film1 = addFilm("Honig im Kopf", "90 Menit", "Family", 2014)
var film2 = addFilm("Victoria", "120 Menit", "Thriller", 2019)
console.log(dataFilm)