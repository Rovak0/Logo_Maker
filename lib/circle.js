function makeCircle(fill){
    const radius = 40;
    const offset = 50-radius;
    return circleHtml = `<circle cx="${offset}" cy="${offset}" r="${radius}" stroke="green" stroke-width="4" fill="${fill}" />`
}

module.exports = makeCircle;