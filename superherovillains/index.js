const fs = require('fs');
const superheroes = require('superheroes');
const supervillains = require('supervillains')

const superVillainsStream = fs.createWriteStream('./supervillains.txt');
const superHeroesStream = fs.createWriteStream('./superheroes.txt');


//Write superheroes and villians to file
for (i = 0; i < 10; i++) { 
    let superheroesList = superheroes.random();
    let supervillainsList = supervillains.random();
    superVillainsStream.write(supervillainsList + '\n');
    superHeroesStream.write(superheroesList + '\n');
}



//fs.copyFileSync("supervillians.txt", "file2.txt")