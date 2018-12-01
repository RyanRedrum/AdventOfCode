const assert = require("chai").assert;
const path = require('path');
const fileReader = require('../../../Utilities/FileReader');
const part1 = require('../../../2018/Day1/Part1.js');

const part1InputPath = path.relative(process.cwd(), './2018/Day1/Part1Input.txt');
const test1InputPath = path.relative(process.cwd(), './test/2018/Day1/Test1Input.txt');
const test2InputPath = path.relative(process.cwd(), './test/2018/Day1/Test2Input.txt');
const test3InputPath = path.relative(process.cwd(), './test/2018/Day1/Test3Input.txt');

describe('Day 1 part 1 tests.', () => {
    it('Can read input file.', done => {
        fileReader.readIntsFromFile(part1InputPath, data => {
            assert.typeOf(data, 'array');
            assert.typeOf(data[0], 'number');
            assert.equal(data.length, 1014);

            done();
        });        
    });

    it('Can calculate the sum of a list of ints - test 1', done => {
        fileReader.readIntsFromFile(test1InputPath, data => {
            const total = part1.calculateFrequency(data);
            assert.equal(total, 3);

            done();
        });
    });

    it('Can calculate the sum of a list of ints - test 2', done => {
        fileReader.readIntsFromFile(test2InputPath, data => {
            const total = part1.calculateFrequency(data);
            assert.equal(total, 0);

            done();
        });
    });

    it('Can calculate the sum of a list of ints - test 3', done => {
        fileReader.readIntsFromFile(test3InputPath, data => {
            const total = part1.calculateFrequency(data);
            assert.equal(total, -6);

            done();
        });
    });
});