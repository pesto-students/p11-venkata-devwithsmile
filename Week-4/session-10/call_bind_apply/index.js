class Calculator{
    add(a,b) {
        return a+b;
    }

    subtract(a,b) {
        return a-b;
    }

    multiply(a,b) {
        return a*b;
    }

    divide(a,b){
        return (a/b);
    }

    multiplybytwo(a){
        return a*2;
    }
}

class ScientifiCalculator extends Calculator{
    square(a){
        return a**2;
    }

    cube(a){
        a**3;
    }
    power(a,b){
        return a**b;
    }
}




const sc1 = new ScientifiCalculator();

const p = sc1.add.call(this, 10,15);
console.log(p);

const q = sc1.subtract.apply(this, [10,5]);
console.log(q);

//bind not able to understand fully, leaving as of now

