function maxInArray(numbers) {
    let largestNumber = numbers[0]
    for (let i = 0; i <= numbers.length; i++) {
        const element = numbers[i];
        if (element < largestNumber) {
            largestNumber = element;
        }

    }
    return largestNumber;
}

const heights = [167, 190, 120, 165, 137, 5];
const tallest = maxInArray(heights);
console.log("tallest person  is  :", tallest)