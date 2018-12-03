const path = require('path');
const fileReader = require('../../Utilities/FileReader');

const calculateSolution = data => {
    const matrix = new Map();
    let solution = 0;

    //Build out matrix
    data.forEach(d => {
        //Split input into corresponding parts
        const parts = d.split(' ');

        const id = parseInt(parts[0].replace('#', ''));

        const padding = parts[2].replace(':', '').split(',');
        const xPad = parseInt(padding[0]);
        const yPad = parseInt(padding[1]);

        const dimensions = parts[3].split('x');
        const width = parseInt(dimensions[0]);
        const height = parseInt(dimensions[1]);

        for (let i = 1; i <= width; i++) {
            for (let j = 1; j <= height; j++) {
                const key = `${i + xPad}x${j + yPad}`;
                let value = id;

                if (matrix.get(key)) {
                    value = 'x';
                }

                matrix.set(key, value);
            }
        }
    });

    var matrixArray = Array.from(matrix.values());

    //Search for first value that is not overlapped
    data.forEach(d => {
        //Split input into corresponding parts
        const parts = d.split(' ');

        const id = parseInt(parts[0].replace('#', ''));

        const dimensions = parts[3].split('x');
        const width = parseInt(dimensions[0]);
        const height = parseInt(dimensions[1]);

        //Get values with this id
        const idCount = matrixArray.filter(v => v === id).length;
        if (idCount === width * height) {
            solution = id;
        }
    });

    return solution;
};
exports.calculateSolution = calculateSolution;

const findSolution = () => {
    const inputPath = path.relative(process.cwd(), './Input.txt');
    fileReader.readStringsFromFile(inputPath, data => {
        const total = calculateSolution(data);
        console.log(total);
    });
};

if (process.argv[2] && process.argv[2] === 'execute') {
    findSolution();
}
