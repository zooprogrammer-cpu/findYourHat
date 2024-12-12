const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(input) {
    this.input = input;
  }

  print() {
    console.log('Printing this');
  }
}

const newField = new Field('Hello');
newField.print();
