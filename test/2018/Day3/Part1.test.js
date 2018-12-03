const assert = require("chai").assert;
const part1 = require('../../../2018/Day3/Part1.js');

describe('Day 3 part 1 tests.', () => {
    it('Solves sample input correctly.', () => {
        const input = [
            '#1 @ 1,3: 4x4',
            '#2 @ 3,1: 4x4',
            '#3 @ 5,5: 2x2'
        ];
        
        const solution = part1.calculationSolution(input);
        assert.equal(solution, 4);
    });

    it('Solves more sample input.', () => {
        const input = [
          '#1 @ 0,1: 3x3',
          '#2 @ 4,3: 2x2',
          '#3 @ 2,3: 3x2',
          '#4 @ 3,1: 2x7'
        ];

        const solution = part1.calculationSolution(input);
        assert.equal(solution, 5);
    });

    it('Solves first 10 from input.', () => {
        const input = [
            '#1 @ 669,271: 17x11',
            '#2 @ 153,186: 20x26',
            '#3 @ 186,838: 28x11',
            '#4 @ 119,248: 18x13',
            '#5 @ 57,843: 14x11',
            '#6 @ 868,833: 18x20',
            '#7 @ 225,38: 26x20',
            '#8 @ 208,673: 29x22',
            '#9 @ 25,877: 23x13',
            '#10 @ 406,555: 11x25'
        ];

        const solution = part1.calculationSolution(input);
        assert.equal(solution, 0);
    });
});
