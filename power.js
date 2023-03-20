function power(base, exponent) {
    if (exponent === 0) return 1
    return base * power(base, exponent-1);
}

// power(2,0);

function productOfArray(array) {
    if(array.length === 0) return 1
    return array[0] * productOfArray(array.splice(1));
}

productOfArray([1,2,3,10])