const fs = require('fs')
const path = require('path')

fs.writeFileSync(path.join(__dirname, '/ejemplo_1.js'),
    `<>

    </>`
, {encoding: 'utf-8'});
console.log('writeFileSync:','Archivo creado!');

data = fs.readFileSync(path.join(__dirname, '/ejemplo_1.txt'), {encoding: 'utf-8'})
console.log('readFileSync:', data)

fs.appendFileSync(path.join(__dirname, '/ejemplo_1.txt'), '\nEsto es una nueva línea');
console.log('appendFile:','Archivo actualizado!');

data = fs.readFileSync(path.join(__dirname, '/ejemplo_1.txt'), {encoding: 'utf-8'})
console.log('readFileSync:', data)