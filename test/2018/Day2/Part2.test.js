const assert = require("chai").assert;
const part2 = require('../../../2018/Day2/Part2.js');

const input = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];

describe('Tests for day 2 part 2.', () => {
    it('Calculates sample input correctly.', () => {
        const solution = part2.calculationSolution(input);
        assert.equal(solution, 'fgij');
    });
});