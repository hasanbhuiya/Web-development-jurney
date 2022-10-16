function myInch(inch){
    const inchToFeet = inch / 12;
    return inchToFeet;
}
var result = myInch(65).toFixed(2);
console.log(result);