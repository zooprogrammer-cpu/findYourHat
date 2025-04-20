const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field
  }

  generateField() {
    console.log('In generate field');
  }

  print() {
    let joinedField = this.field.join();
    console.log(joinedField);
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.generateField();

myField.print();

const direction = prompt('Which direction?');
console.log(`Direction: ${direction}`);

if (direction === 'd') {
  console.log('go down');
}
