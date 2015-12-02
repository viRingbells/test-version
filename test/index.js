/**
 * Examples of test version
 **/
'use strict';

const test    = require('..');
const chalk   = require('chalk');
const debug   = require('debug')('test-version');

debug('Test: testing');


const list = [
    ['v1.0.0', 'v1.0.0  ', true],
    ['v1.0.0', 'v1.0.2  ', false],
    ['v1.0.0', 'v1.0.*  ', true],
    ['v1.0.0', 'v1.0.x  ', true],
    ['v1.0.2', 'v1.0.*  ', true],
    ['v1.4.2', 'v1.0.*  ', false],
    ['v1.4.2', 'v1.*.*  ', true],
    ['v1.4.2', 'v1.4    ', true],
    ['v1.4',   'v1.4.0  ', true],
    ['v1.4',   'v1.4.2  ', false],
    ['v0.9.0', '!v1.0.0 ', true],
    ['v1.0.0', '!v1.0.0 ', false],
    ['v1.0.2', '!v1.0.0 ', true],
    ['v1.0.0', '~v1.0.0 ', true],
    ['v1.0.2', '~v1.0.0 ', true],
    ['v1.4.2', '~v1.0.0 ', false],
    ['v1.0.0', '^v1.0.0 ', true],
    ['v1.0.2', '^v1.0.0 ', true],
    ['v1.4.2', '^v1.0.0 ', true],
    ['v3.4.2', '^v1.0.0 ', false],
    ['v0.9.0', '>v1.0.0 ', false],
    ['v1.0.0', '>v1.0.0 ', false],
    ['v1.0.2', '>v1.0.0 ', true],
    ['v1.4.2', '>v1.0.0 ', true],
    ['v1.10.2', '>v1.4.0', true],
    ['v1.4.2', '<v1.10.0', true],
    ['v0.9.0', '>=v1.0.0', false],
    ['v1.0.0', '>=v1.0.0', true],
    ['v1.0.2', '>=v1.0.0', true],
    ['v1.4.2', '>=v1.0.0', true],
    ['v1.0.0', '<v0.9.0 ', false],
    ['v1.0.0', '<v1.0.0 ', false],
    ['v1.0.0', '<v1.0.2 ', true],
    ['v1.0.0', '<=v0.9.0', false],
    ['v1.0.0', '<=v1.0.0', true],
    ['v1.0.0', '<=v1.0.2', true],
    ['v1.0.0', 'v0.0.9..v1.0.2',  true],
    ['v1.0.0', 'v0.0.9~v1.0.2 ',  true],
    ['v1.0.0', 'v0.0.9~v1.0.0 ',  true],
    ['v1.0.0', 'v1.0.1~v1.0.2 ',  false],
];

describe('test version', () => {
    list.forEach((item) => {
        it('should be ' + chalk.yellow(item[2]) + '\t to test ' + chalk.yellow(item[0]) + '\t with ' + chalk.yellow(item[1]), done => {
            test(item[0], item[1]).should.be.exactly(item[2]);
            done();
        });
    });    
});
