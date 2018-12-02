const path = require('path');
const fileReader = require('../../Utilities/FileReader');

const calculationSolution = data => {
    const targetLength = data[0].length - 1;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (i !== j) {
                let output = '';
                const word1 = data[i];
                const word2 = data[j];

                for (let k = 0; k < word1.length; k++) {
                    if (word1[k] === word2[k]) {
                        output += word1[k];
                    }
                }

                if (output.length === targetLength) {
                    return output;
                }
            }
        }
    }
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
