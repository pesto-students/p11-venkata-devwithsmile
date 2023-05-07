function counter() {
    var count = 0;
    return function () {

        count++;
        return count;
    }

}

let firstcounter = counter();
let secondcounter = counter();

const firstValues = [];
const secondValues = [];



    

for (let i = 0; i < 5; i++) {

    firstValues[i] = firstcounter();

}

for (let i = 0; i < 3; i++) {

    secondValues[i] = secondcounter();

}



console.log(firstValues);
console.log(secondValues)
