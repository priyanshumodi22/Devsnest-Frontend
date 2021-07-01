//bind method
const john = {
  name: 'John',
  age: 24,
};

const jane = {
  name: 'Jane',
  age: 22,
};

function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`); 
}

const greetingjohn = greeting.bind(john);
greetingjohn();

const greetingjane = greeting.bind(jane);
greetingjane();

//call method
greeting.call(john);

//apply method
function greet(city) {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old, from ${city}`); 
}
greet.apply(john,["Toronto"]);

