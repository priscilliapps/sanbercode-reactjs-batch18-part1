//SOAL NOMOR 1
const lingkaranKecil = (r) => {
    let luas = 3.14 * r * r
    return luas
}

console.log(lingkaranKecil(10))

const lingkaranBesar = (d) => {
    let keliling = 3.14 * d
    return keliling
}

console.log(lingkaranBesar(12))


//SOAL NOMOR 2
let kalimat = "";
var daftarKata = ["saya", "adalah", "seorang", "frontend", "developer"];

const tambahKata = (e) => {
    return e;
};

daftarKata.forEach((kata) => {
    kalimat += `${tambahKata(kata)}`
});

console.log(kalimat);


//SOAL NOMOR 3
const newFunction = function literal(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function(){
            console.log(firstName + " " + lastName) 
        }
    }
}

newFunction("William", "Imoh").fullName() 


//SOAL NOMOR 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation)


//SOAL NOMOR 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined = [...west, ...east]
console.log(combined)