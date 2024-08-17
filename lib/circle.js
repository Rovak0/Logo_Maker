// function makeCircle(fill){
//     // const radius = 40;
//     // const offset = 50-radius;
//     return circleHtml = `<circle cx="50" cy="50" r="40" fill="${fill}" />`
// }

//these are exposed to use object classes with traits
//the objects need their shape (universal), color, text, and text color

class Circle {
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    createLogo(){
        const circleHtml = `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
        const logoText = `<text x=30 y=55 fill="${this.textColor}">${this.text}</text>`;
        const svgLogo = 
            `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">    
                ${circleHtml}
                ${logoText}
            </svg>`;
        return svgLogo;
    }
}

module.exports = Circle;