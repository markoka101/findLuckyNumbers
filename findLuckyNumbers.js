// Write your code below this line
const luckyNumber = n => {
    //create empty array
    let arr = []
    for (let i = 0; i < n; i++) {
        //push random number between 0 and 9 into array
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

console.log(luckyNumber(7));