const assert = require("chai").assert;
const part2 = require('../../../2018/Day1/Part2.js');

describe('Day 1 part 2 tests.', () => {
    it('Solves problem - sample 1', () => {
        const input = [1, -1];
        const solution = part2.findRepeatedFrequency(input);
        assert.equal(solution, 0);
    });

    it('Solves problem - sample 2', () => {
        const input = [3, 3, 4, -2, -4];
        const solution = part2.findRepeatedFrequency(input);
        assert.equal(solution, 10);
    });

    it('Solves problem - sample 3', () => {
        const input = [-6, 3, 8, 5, -6];
        const solution = part2.findRepeatedFrequency(input);
        assert.equal(solution, 5);
    });

    it('Solves problem - sample 4', () => {
        const input = [+7, +7, -2, -7, -4];
        const solution = part2.findRepeatedFrequency(input);
        assert.equal(solution, 14);
    });

});