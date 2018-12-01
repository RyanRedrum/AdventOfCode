const assert = require("chai").assert;
const part1 = require('../../../2018/Day1/Part1.js');

describe('Day 1 part 1 tests.', () => {
    it('Can calculate the sum of a list of ints - test 1', () => {
        const input = [1, 1, 1];
        const total = part1.calculateFrequency(input);
        assert.equal(total, 3);
    });

    it('Can calculate the sum of a list of ints - test 2', () => {
        const input = [1, 1, -2];
        const total = part1.calculateFrequency(input);
        assert.equal(total, 0);
    });

    it('Can calculate the sum of a list of ints - test 3', () => {
        const input = [-1, -2, -3];
        const total = part1.calculateFrequency(input);
        assert.equal(total, -6);
    });
});