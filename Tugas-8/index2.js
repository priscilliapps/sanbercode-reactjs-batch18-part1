var readBooksPromise = require('./promise.js')
 
var i = 0
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

const howMuchTimeLeft = (time) => {
    if (books[i]) {
        readBooksPromise(time, books[i])
        .then((sisaWaktu) => {
            if (sisaWaktu !=1000) {
                i++
                howMuchTimeLeft(sisaWaktu)
            }
        })
    } else {
        console.log("Waktu Habis")
    }
}

howMuchTimeLeft(10000)