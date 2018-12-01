const assert = require("chai").assert;
const path = require('path');
const fileReader = require('../../Utilities/FileReader');

describe('File reader utility tests.', () => {
    it('Can read in an array of strings from a text file.', done => {
        fileReader.readStringsFromFile(path.relative(process.cwd(), './test/Utilities/TestStrings.txt'), data => {
            assert.typeOf(data, 'array');
            assert.equal(data[0], 'hello');
            assert.equal(data[1], 'world');
            assert.equal(data[2], 'dinkus');

            done();
        }); 
    });

    it('Can read in an array of strings from a text file.', done => {
        fileReader.readIntsFromFile(path.relative(process.cwd(), './test/Utilities/TestInts.txt'), data => {
            assert.typeOf(data, 'array');
            assert.equal(data[0], 1);
            assert.equal(data[1], 2);
            assert.equal(data[2], 3);

            done();
        }); 
    });
});