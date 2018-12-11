const path = require('path');
const fileReader = require('../../Utilities/FileReader');

const calculateSolution = (polymer) => {
    let solutionFound = false;
    let currentIndex = 0;

    do {
        solutionFound = false;
        for (let i = currentIndex; i < polymer.length; i++) {
            if (Math.abs(polymer.charCodeAt(i) - polymer.charCodeAt(i + 1)) === 32) {
                polymer = polymer.slice(0, i) + polymer.slice(i + 2);
                currentIndex = i === 0 ? 0 : currentIndex - 1;
                solutionFound = true;
                break;
            }
        }
    } while (solutionFound && polymer.length > 0);

    return polymer.length;
};
exports.calculateSolution = calculateSolution;

const findSolution = () => {
    const inputPath = path.relative(process.cwd(), './Input.txt');
    fileReader.readStringFromFile(inputPath, data => {
        const total = calculateSolution(data, 0);
        console.log(total);
    });
};

if (process.argv[2] && process.argv[2] === 'execute') {
    findSolution();
}
