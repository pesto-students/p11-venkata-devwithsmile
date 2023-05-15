
 

function *genrator(param){
   for (const iterator of param) {
    const sym = Symbol(iterator);
    yield sym;
   }
   

}

const gen = genrator(['hello','world','test']);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);