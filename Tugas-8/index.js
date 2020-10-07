var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

readBooks(10000, books[0],
    item1 => { readBooks(item1, books[1],
        item2 => { readBooks(item2, books[2],
            item3 => { readBooks(item3, books[3],
                item4 => { console.log(item4);
            })
        })
    })
})