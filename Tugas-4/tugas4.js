// SOAL NOMOR 1
console.log("NOMOR 1")
console.log("")

var text1 = "I love coding";
var text2 = "I will become a frontend developer";
var num1 = 0;
var num2 = 2;
var num3 = 20;

console.log("LOOPING PERTAMA")
while (num1 < 20) {
    num1 += num2;
    console.log(num1, " - ", text1);
}
console.log("")

console.log("LOOPING KEDUA");
while (num3 > 2) {
    if (num3 == 20) {
        console.log(num3, " - ", text2);
    }
    num3 -= num2;
    console.log(num3, " - ", text2);
}

console.log("==================")

//SOAL NOMOR 2
console.log("NOMOR 2")
console.log("")

var label_1 = "Santai";
var label_2 = "I Love Coding";
var label_3 = "Berkualitas";

for (var i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 2 == 1) {
        console.log(i, " - ", label_2);
    } else if (i % 2 == 0) {
        console.log(i, " - ", label_3);
    } else {
        console.log(i, " - ", label_1)
    }
}

console.log("==================")


//SOAL NOMOR 3
console.log("NOMOR 3")
console.log("")

var icon = "";
var num = 0;

//DENGAN WHILE
//while (num < 7) {
//    icon += "#";
//    num += 1;
//    console.log(icon);
//}

for (num = 0; num < 7; num++) {
    icon += "#"
    console.log(icon);
}

console.log("==================")


//SOAL NOMOR 4
console.log("NOMOR 4")
console.log("")

var kalimat = "saya sangat senang belajar javascript";
var words = kalimat.split(" ")
console.log(words)
console.log("==================")


//SOAL NOMOR 5
console.log("NOMOR 5")
console.log("")

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var i = 0, j;
while (i < daftarBuah.length) {
    j = i + 1;
    while (j < daftarBuah.length) {
        if (daftarBuah[j] < daftarBuah[i]) {
            var temp = daftarBuah[i];
            daftarBuah[i] = daftarBuah[j];
            daftarBuah[j] = temp;
        }
        j++;
    }
    i++;
}
console.log(daftarBuah)