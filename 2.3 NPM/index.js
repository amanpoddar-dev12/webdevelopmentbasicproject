// var generateName = require('sillyname');
import generateName from "sillyName";
var sillyName = generateName();
console.log(sillyName)

import superheroes from 'superheroes';

// const superheroes = require('superheroes');
 
// superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
console.log(`i am ${superheroes.random()}`);
//=> 'Spider-Ham'