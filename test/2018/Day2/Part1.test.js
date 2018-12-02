const assert = require("chai").assert;
const part1 = require('../../../2018/Day2/Part1.js');

const input = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];

describe('Day 2 part 1 tests.', () => {
    it('Solves sample input correctly.', () => {
        const solution = part1.calculationSolution(input);
        assert.equal(solution, 12);
    });
});