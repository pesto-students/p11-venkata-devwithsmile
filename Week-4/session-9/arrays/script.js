let nums = [1, 2, 3, 4, 5, 6]

function DivideArray(n) {
    let EvenNum = []
    let OddNum = []
    n = n.sort() 
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) {
            EvenNum.push(n[i])
        } else {
            OddNum.push(n[i])
        }

    }

    console.log("Even Numbers : ");
    for (let index = 0; index < EvenNum.length; index++) {
        console.log(EvenNum[index]);
        
    }

    console.log("Odd Numbers : ");
    for (let index = 0; index < OddNum.length; index++) {
        console.log(OddNum[index]);
        
    }
}

DivideArray(nums)