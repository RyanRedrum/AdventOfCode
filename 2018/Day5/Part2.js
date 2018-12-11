const path = require('path');
const fileReader = require('../../Utilities/FileReader');

const calculateSolution = (polymer) => {
    let bestPolymer = polymer;

    for (let i = 65; i <= 90; i++) {
        const capitalRegex = new RegExp(String.fromCharCode(i), 'g');
        const lowerRegex = new RegExp(String.fromCharCode(i + 32), 'g')
        let currentPolymer = polymer.replace(capitalRegex, '').replace(lowerRegex, '');
        let solutionFound = false;
        let currentIndex = 0;
    
        do {
            solutionFound = false;
            for (let i = currentIndex; i < currentPolymer.length; i++) {
                if (Math.abs(currentPolymer.charCodeAt(i) - currentPolymer.charCodeAt(i + 1)) === 32) {
                    currentPolymer = currentPolymer.slice(0, i) + currentPolymer.slice(i + 2);
                    currentIndex = i === 0 ? 0 : currentIndex - 1;
                    solutionFound = true;
                    break;
                }
            }
        } while (solutionFound && currentPolymer.length > 0);
    
        if (currentPolymer.length < bestPolymer.length) {
            bestPolymer = currentPolymer;
        }
    }

    return bestPolymer.length;
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
