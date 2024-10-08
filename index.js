//needs to prompt for text, read text, reference the shapes, make the item, save the item
const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');


//array of questions to be asked
const questions = ['What 3 letters would you like in your logo?', 'What color would you like for the text color?', 
    'What shape would you like? (Square, Triangle, or Circle', 'What color would you like the shape?'
];

//the write function
function writeSvg(text) {
    fs.writeFile('logo.html', text, (err) => {
        err ? console.log(err) : console.log("working")
    })
}

//lets have the logo maker be its own function
function svgGenerator(queryData) {
    //text, textColor,shape, shapeColor
    //not worried about text stuff
    const shape = queryData.shape;
    const shapeColor = queryData.shapeColor;
    const text = queryData.text;
    const textColor = queryData.textColor;
    switch(shape){
        case 'circle':
            return new circle(shapeColor, text, textColor);
        case 'square':
            console.log('square!!!');
            return new Square(shapeColor, text, textColor);
        case 'triangle':
            return new Triangle(shapeColor, text, textColor);
        default:
            break;
    }
}


//set up the query
inquirer
    .prompt([
        {
            type: "input",
            message : questions[0],
            name: "text"
        },
        {
            type: "input",
            message : questions[1],
            name: "textColor"
        }, 
        {
            type: "list",
            message : questions[2],
            choices : ['square', 'circle', 'triangle'],
            name: "shape"
        }, 
        {
            type: "input",
            message : questions[3],
            name: "shapeColor"
        },  
    ])
    .then(function(response){
        console.log(response);
        const logoShape = svgGenerator(response); //this returns object
        console.log(logoShape);
        //make the text components
    //     const logoText = `<text x=30 y=55 fill="${response.textColor}">${response.text}</text>`;
    //     const svgLogo = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    //     ${logoShape}
    //     ${logoText}
    // </svg>`;
        const svgLogo = logoShape.createLogo();
        writeSvg(svgLogo);

    })