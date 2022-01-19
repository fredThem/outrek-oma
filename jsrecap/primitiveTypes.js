const person = {
  name: 'lola',
};

const secondPerson = person;
const thirdPerson = { ...person };

person.name = 'Fred';
console.log(secondPerson);
console.log(thirdPerson);
