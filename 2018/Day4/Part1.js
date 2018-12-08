const path = require('path');
const fileReader = require('../../Utilities/FileReader');
const utilities = require('./Utilities');

const findSolution = () => {
    const inputPath = path.relative(process.cwd(), './Input.txt');
    fileReader.readStringsFromFile(inputPath, data => {
        const parsedInput = utilities.parseInput(data);
        const asleepHours = utilities.calculateAsleepHours(parsedInput);
        const solution = utilities.calculateSolution(asleepHours);

        console.log(solution);
    });
};

if (process.argv[2] && process.argv[2] === 'execute') {
    findSolution();
}
