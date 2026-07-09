function numberType(number) {
    if (number > 0) {
        console.log("The number value is greater than zero");
    } else if (number < 0) {
        console.log("The number value is less than zero");
    } else {
        console.log("The number is equal to zero");
    }
}

numberType(1);
numberType(0);
numberType(-1);