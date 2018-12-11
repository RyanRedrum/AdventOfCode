const assert = require("chai").assert;
const part1 = require('../../../2018/Day5/Part1.js');

describe('Day 5 part 1 tests.', () => {
    it('Solves first example.', () => {
        const input = 'aA';
        const solution = part1.calculateSolution(input);

        assert.equal(solution, 0);
    });

    it('Solves second example.', () => {
        const input = 'abBA';
        const solution = part1.calculateSolution(input);

        assert.equal(solution, 0);
    });

    it('Solves third example.', () => {
        const input = 'abAB';
        const solution = part1.calculateSolution(input);

        assert.equal(solution, 4);
    });

    it('Solves fourth example.', () => {
        const input = 'aabAAB';
        const solution = part1.calculateSolution(input);

        assert.equal(solution, 6);
    });

    it('Solves fifth example.', () => {
        const input = 'dabAcCaCBAcCcaDA';
        const solution = part1.calculateSolution(input);

        assert.equal(solution, 10);
    });
});