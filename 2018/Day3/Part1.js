const path = require('path');
const fileReader = require('../../Utilities/FileReader');

const calculationSolution = data => {
    const matrix = new Map();
    let overlayCount = 0;

    data.forEach(d => {
        //Split input into corresponding parts
        const parts = d.split(' ');

        const padding = parts[2].replace(':', '').split(',');
        const xPad = parseInt(padding[0]);
        const yPad = parseInt(padding[1]);

        const dimensions = parts[3].split('x');
        const width = parseInt(dimensions[0]);
        const height = parseInt(dimensions[1]);

        for (let i = 1; i <= width; i++) {
            for (let j = 1; j <= height; j++) {
                const key = `${i + xPad}x${j + yPad}`;
                const cellValue = (matrix.get(key) || 0) + 1;

                if (cellValue === 2) {
                    overlayCount++;
                }

                matrix.set(key, cellValue);
            }
        }
    });

    return overlayCount;
};
exports.calculationSolution = calculationSolution;

const findSolution = () => {
    const inputPath = path.relative(process.cwd(), './Input.txt');
    fileReader.readStringsFromFile(inputPath, data => {
        const total = calculationSolution(data);
        console.log(total);
    });
};

if (process.argv[2] && process.argv[2] === 'execute') {
    findSolution();
}
