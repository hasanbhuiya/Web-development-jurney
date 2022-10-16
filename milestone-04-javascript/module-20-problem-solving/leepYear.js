function isLeapYear (year){
    const  leapyear  = year % 4;
    if (leapyear === 0){
        console.log(year," : this year is leap year");
        return true;
    }
    else {
        console.log(year," : this year is not leap year");
        return false;
    }
}
const result = isLeapYear(2024)
console.log(result)