const fs = require('fs');

const readStringFromFile = (path, callback) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            throw err;
        };

        if (typeof callback === 'function') {
            callback(data);
        }
    });
};
exports.readStringFromFile = readStringFromFile;

const readStringsFromFile = (path, callback) => {
    readStringFromFile(path, data => {
        if (typeof callback === 'function') {
            callback(data.split('\r\n'));
        }
    });
}
exports.readStringsFromFile = readStringsFromFile;

exports.readIntsFromFile = (path, callback) => {
    readStringsFromFile(path, data => {
        if (typeof callback === 'function') {
            callback(data.map(d => parseInt(d)));
        }
    });
};