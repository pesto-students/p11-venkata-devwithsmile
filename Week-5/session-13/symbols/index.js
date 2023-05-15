num = 1
function gerateTransactionID() {
    const string = "Transaction";
    const sym = Symbol();


    const id = string + num;

    num= num+1;

    const obj = { [sym]: id };

    return obj;
}

const Transactionid1 = gerateTransactionID();
console.log(Transactionid1); 

const Transactionid2 = gerateTransactionID();
console.log(Transactionid2); 