const fs = require('fs');

const sortInts = (a, b) => a - b;

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }

    let total = 0;
    const packages = data.split('\r\n');
    packages.forEach(p => {
        const dimensions = p.split('x')
            .map(p => parseInt(p))
            .sort(sortInts);

        const wrapLength = (2 * dimensions[0]) + (2 * dimensions[1]);
        const bowLength = dimensions[0] * dimensions[1] * dimensions[2];

        total += wrapLength + bowLength;
    });

    console.log(total);
});