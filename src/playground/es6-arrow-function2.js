const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 100));

// arguments is es5 function property

const user = {
    name: 'Luis Pineda',
    cities: ['San Salvador', 'White Plains', 'Tampa'],
    printPlaceLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
};

console.log(user.printPlaceLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply(){
      return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
