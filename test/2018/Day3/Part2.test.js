const assert = require("chai").assert;
const part2 = require('../../../2018/Day3/Part2.js');

describe('Day 3 part 2 tests.', () => {
    it('Solves sample input correctly.', () => {
        const input = [
            '#1 @ 1,3: 4x4',
            '#2 @ 3,1: 4x4',
            '#3 @ 5,5: 2x2'
        ];
        
        const solution = part2.calculateSolution(input);
        assert.equal(solution, 3);
    });
});