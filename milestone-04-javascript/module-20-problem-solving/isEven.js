function isEvenNumber(number){
    const even = number % 2; 
if(even === 0){
    return true;
}
else{
    return false;
}
}
const result = isEvenNumber(8);
console.log(result);