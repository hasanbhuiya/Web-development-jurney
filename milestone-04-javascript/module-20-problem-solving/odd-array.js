  function  factorialNumberIs(number){
    let result = 1;
    for (let i = number; i >= 1;i--){
        result = result * i;
    }
    return result;
  }

const factorialNumber = factorialNumberIs(3);
console.log(factorialNumber)