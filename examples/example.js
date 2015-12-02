/**
 * Examples of test version
 **/
'use strict';

const test    = require('..');
const chalk   = require('chalk');
const debug   = require('debug')('test-version');

debug('Example: testing...');
console.log(chalk.blue('  Testing v1.0.0 with v1.0.0 result is ' + !!test('v1.0.0', 'v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with v1.0.2 result is ' + !!test('v1.0.0', 'v1.0.2')));
console.log(chalk.blue('  Testing v1.0.0 with v1.0.* result is ' + !!test('v1.0.0', 'v1.0.*')));
console.log(chalk.blue('  Testing v1.0.0 with v1.0.x result is ' + !!test('v1.0.0', 'v1.0.x')));
console.log(chalk.blue('  Testing v1.0.2 with v1.0.* result is ' + !!test('v1.0.2', 'v1.0.*')));
console.log(chalk.blue('  Testing v1.4.2 with v1.0.* result is ' + !!test('v1.4.2', 'v1.0.*')));
console.log(chalk.blue('  Testing v1.4.2 with v1.*.* result is ' + !!test('v1.4.2', 'v1.*.*')));
console.log(chalk.blue('  Testing v1.4.2 with v1.4   result is ' + !!test('v1.4.2', 'v1.4')));
console.log(chalk.blue('  Testing v1.4   with v1.4.0 result is ' + !!test('v1.4',   'v1.4.0')));
console.log(chalk.blue('  Testing v1.4   with v1.4.2 result is ' + !!test('v1.4',   'v1.4.2')));
console.log(chalk.blue('  Testing v0.9.0 with !v1.0.0  result is ' + !!test('v0.9.0',   '!v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with !v1.0.0  result is ' + !!test('v1.0.0',   '!v1.0.0')));
console.log(chalk.blue('  Testing v1.0.2 with !v1.0.0  result is ' + !!test('v1.0.2',   '!v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with ~v1.0.0  result is ' + !!test('v1.0.0',   '~v1.0.0')));
console.log(chalk.blue('  Testing v1.0.2 with ~v1.0.0  result is ' + !!test('v1.0.2',   '~v1.0.0')));
console.log(chalk.blue('  Testing v1.4.2 with ~v1.0.0  result is ' + !!test('v1.4.2',   '~v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with ^v1.0.0  result is ' + !!test('v1.0.0',   '^v1.0.0')));
console.log(chalk.blue('  Testing v1.0.2 with ^v1.0.0  result is ' + !!test('v1.0.2',   '^v1.0.0')));
console.log(chalk.blue('  Testing v1.4.2 with ^v1.0.0  result is ' + !!test('v1.4.2',   '^v1.0.0')));
console.log(chalk.blue('  Testing v3.4.2 with ^v1.0.0  result is ' + !!test('v3.4.2',   '^v1.0.0')));
console.log(chalk.blue('  Testing v0.9.0 with >v1.0.0  result is ' + !!test('v0.9.0',   '>v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with >v1.0.0  result is ' + !!test('v1.0.0',   '>v1.0.0')));
console.log(chalk.blue('  Testing v1.0.2 with >v1.0.0  result is ' + !!test('v1.0.2',   '>v1.0.0')));
console.log(chalk.blue('  Testing v1.4.2 with >v1.0.0  result is ' + !!test('v1.4.2',   '>v1.0.0')));
console.log(chalk.blue('  Testing v1.10.2 with >v1.4.0  result is ' + !!test('v1.10.2',   '>v1.4.0')));
console.log(chalk.blue('  Testing v0.9.0 with >=v1.0.0  result is ' + !!test('v0.9.0',  '>=v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with >=v1.0.0  result is ' + !!test('v1.0.0',  '>=v1.0.0')));
console.log(chalk.blue('  Testing v1.0.2 with >=v1.0.0  result is ' + !!test('v1.0.2',  '>=v1.0.0')));
console.log(chalk.blue('  Testing v1.4.2 with >=v1.0.0  result is ' + !!test('v1.4.2',  '>=v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with <v0.9.0  result is ' + !!test('v1.0.0',   '<v0.9.0')));
console.log(chalk.blue('  Testing v1.0.0 with <v1.0.0  result is ' + !!test('v1.0.0',   '<v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with <v1.0.2  result is ' + !!test('v1.0.0',   '<v1.0.2')));
console.log(chalk.blue('  Testing v1.0.0 with <=v0.9.0  result is ' + !!test('v1.0.0',  '<=v0.9.0')));
console.log(chalk.blue('  Testing v1.0.0 with <=v1.0.0  result is ' + !!test('v1.0.0',  '<=v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with <=v1.0.2  result is ' + !!test('v1.0.0',  '<=v1.0.2')));
console.log(chalk.blue('  Testing v1.0.0 with v0.0.9~v1.0.2  result is ' + !!test('v1.0.0',  'v0.0.9~v1.0.2')));
console.log(chalk.blue('  Testing v1.0.0 with v0.0.9..v1.0.0  result is ' + !!test('v1.0.0',  'v0.0.9..v1.0.0')));
console.log(chalk.blue('  Testing v1.0.0 with v1.0.1..v1.0.2  result is ' + !!test('v1.0.0',  'v1.0.1..v1.0.2')));
