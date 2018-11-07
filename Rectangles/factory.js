function createsRectangle(length, width){
    return {
        length,
        width,
        getArea: function(){
            return this.length * this.width;
        }

    }
}

let square1 = createsRectangle(7, 4);

console.log(`1. Quadrat: 
Seitenlänge = ${square1.length}, Breite = ${square1.width}, Fläche = ${square1.getArea()}`);



let square2 = createsRectangle(30, 5);

console.log(`2. Quadrat: 
Seitenlänge = ${square2.length}, Breite = ${square2.width}, Fläche = ${square2.getArea()}`);