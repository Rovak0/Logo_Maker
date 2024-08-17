class Square {
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    createLogo(){
        const offset = 0;
        const squareHtml = `<rect x="${offset}" y="${offset}" width="100" height="100"  fill="${this.color}" />`
        const logoText = `<text x=30 y=55 fill="${this.textColor}">${this.text}</text>`;
        const svgLogo = 
            `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">    
                ${squareHtml}
                ${logoText}
            </svg>`;
        return svgLogo;
    }
}

module.exports = Square;

