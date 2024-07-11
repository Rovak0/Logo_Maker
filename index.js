//needs to prompt for text, read text, reference the shapes, make the item, save the item
const inquirer = require('inquirer');

const questions = ['What 3 letters would you like in your logo?', 'What color would you like for the text color?', 
    'What shape would you like? (Square, Triangle, or Circle', 'What color would you like the shape?'
];

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
    })