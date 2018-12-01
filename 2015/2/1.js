const fs = require('fs');

const sortInts = (a, b) => a - b;

fs.readFile('./1.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }

    let total = 0;
    const packages = data.split('\r\n');
    packages.forEach(p => {
        const dimensions = p.split('x')
            .map(p => parseInt(p));
        
        //l = 0
        //w = 1
        //h = 2
        const side1 = dimensions[0] * dimensions[1];
        const side2 = dimensions[1] * dimensions[2];
        const side3 = dimensions[2] * dimensions[0];
        const sides = [side1, side2, side3].sort(sortInts);

        total += (2 * side1) +
            (2 * side2) +
            (2 * side3) +
            sides[0];
    });

    console.log(total);
})