const path = require('path');
const fileReader = require('../../Utilities/FileReader');

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const calculateFrequency = data => data.reduce(reducer);
exports.calculateFrequency = calculateFrequency;

const findSolution = () => {
    const inputPath = path.relative(process.cwd(), './Part1Input.txt');
    fileReader.readIntsFromFile(inputPath, data => {
        const total = calculateFrequency(data);
        console.log(total);
    });
};

if (process.argv[2] && process.argv[2] === 'execute') {
    findSolution();
}