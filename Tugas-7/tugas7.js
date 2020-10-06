//NOMOR 1

class Animal {
    constructor (name) {
        this.animal_name = name
        this.legs = 4
        this.cold_blooded = false
    }

    get AnimalName() {
        return this.animal_name
    }

    set AnimalName(name) {
        this.animal_name = name
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.AnimalName) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Frog extends Animal {
    constructor (name) {
        super (name)
    }

    jump() {
        return "hop hop"
    }

    frogLegs(legs = 2) {
        return legs
    }
}

class Ape extends Animal {
    constructor (name) {
        super (name)
    }

    yell() {
        return "Auooo"
    }

    apeLegs(legs = 2) {
        return legs
    }
}


var sungokong = new Ape("kera sakti")
console.log(sungokong.AnimalName)
console.log(sungokong.apeLegs())
console.log(sungokong.yell()) // "Auooo"
 
var kodok = new Frog("buduk") 
console.log(kodok.AnimalName)
console.log(kodok.frogLegs())
console.log(kodok.jump())


//NOMOR 2

class Clock {
    constructor ({template}) {
        this._template = template
        this.timer
    }

    render() {
        var date = new Date();
  
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        var output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
        console.log(output)
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render()
        this.timer = setInterval(() => this.render(), 1000)
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  