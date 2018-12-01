const path = require('path');
const fileReader = require('../../Utilities/FileReader');

const findRepeatedFrequency = data => {
    let frequency = 0;
    let solution;
    const foundFrequencies = [0];

    while (solution === undefined) {
        for (let i = 0; i < data.length; i++) {
            frequency += data[i];
    
            if (foundFrequencies.indexOf(frequency) > -1) {
                solution = frequency;
                break;
            } else {
                foundFrequencies.push(frequency);
            }
        }
    }

    return solution;
};
exports.findRepeatedFrequency = findRepeatedFrequency;

const findSolution = () => {
    const inputPath = path.relative(process.cwd(), './Part1Input.txt');
    fileReader.readIntsFromFile(inputPath, data => {
        const solution = findRepeatedFrequency(data);
        console.log(solution);
    });
};

if (process.argv[2] && process.argv[2] === 'execute') {
    findSolution();
}