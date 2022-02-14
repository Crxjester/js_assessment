const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');
 
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;


class Field {
    field = [];

    constructor() {

        //current location of charac
        this.locationX = 0;
        this.locationY = 0;

        //creating a 2D array
        for (let a=0; a< col; a++) {
            this.field[a] = [];
        }

        //set the propability of generate hole
        //if random number > 0.3, will generate field
        //if random number <= 0.3, will generate hole
        this.generateField(row, col, 0.2);
    }

    generateField(height, width, percentage = 0.1) {

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {

                //Generate random holes
                const prob = Math.random();
                this.field[y][x] = fieldCharacter;
            }
        }
    
        //Set "hat" location
    
        //set character position as [0][0]
        this.field[0][0] = pathCharacter;
     
    }

    runGame() {
        //Implement you codes
        this.print();
        this.askQuestion();
    }

    print() {
        clear();
        const displayString = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }

    askQuestion(){
        const answer = prompt('Which way?').toUpperCase();
        //Implement your codes
    }
    
} //End of class

const myfield = new Field();
myfield.runGame();



