const path = require('path');
const fileReader = require('../../Utilities/FileReader');

const calculationSolution = data => {
    let twoCount = 0;
    let threeCount = 0;

    data.forEach(word => {
        const splitWord = word.split('');

        const letters = new Map();
        let localTwoCount = 0;
        let localThreeCount = 0;

        splitWord.forEach(letter => {
            let currentValue = letters.get(letter);
            if (letters.get(letter)) {
                currentValue++;
                letters.set(letter, currentValue);

                if (currentValue === 2) {
                    localTwoCount++;
                }
                if (currentValue === 3) {
                    localTwoCount--;
                    localThreeCount++;
                }
                if (currentValue > 3) {
                    localThreeCount--;
                }
            } else {
                letters.set(letter, 1);
            }
        });

        twoCount += localTwoCount > 0 ? 1 : 0;
        threeCount += localThreeCount > 0 ? 1 : 0;
    });

    return twoCount * threeCount;
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
