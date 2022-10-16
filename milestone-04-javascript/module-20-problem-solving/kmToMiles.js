function kmToMiles(kilometers){
    const miles = kilometers * 0.621371192;
    return miles;
}

var result = kmToMiles(10).toFixed(2);
console.log(result)