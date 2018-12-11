const assert = require("chai").assert;
const part2 = require('../../../2018/Day5/Part2.js');

describe('Day 5 part 2 tests.', () => {
    it('Solves sample input correctly.', () => {
        const input = 'dabAcCaCBAcCcaDA';
        const solution = part2.calculateSolution(input);

        assert.equal(solution, 4);
    });
});