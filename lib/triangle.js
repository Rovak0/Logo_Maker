function makeTriangle(fill){
    return circleHtml = `<polygon points="0,100 50,0, 100,100" fill="${fill}" />`
}

class Triangle {
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    createLogo(){
        const offset = 0;
        const triangleHtml = `<polygon points="0,100 50,0, 100,100" fill="${this.color}" />`
        const logoText = `<text x=30 y=55 fill="${this.textColor}">${this.text}</text>`;
        const svgLogo = 
            `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">    
                ${triangleHtml}
                ${logoText}
            </svg>`;
        return svgLogo;
    }
}


module.exports = Triangle;