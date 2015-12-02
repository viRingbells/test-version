/**
 * Test Version
 **/
'use strict';

const debug   = require('debug')('test-version');

/* Usage:

test_version('v1.0.0', '1.0.0');     ==> true
test_version('v1.0.2', '1.0.*');     ==> true
test_version('v1.0.2', '~1.0.0');    ==> true
test_version('v1.0.2', '>1.0.0');    ==> true
test_version('v1.0.2', '1.0.0...1.0.10')    ==> true

*/

function test_version (version, target) {
    debug("TestVersion: start to test " + version + " with " + target);
    if ('string' !== typeof version || 'string' !== typeof target) {
        throw new Error('Both param "version" and "target" must be a string');
    }
    let range = test_range(version);
    if (range) {
        throw new Error('Version to test should not be a range');
    }
    version = parse(version);
    range = test_range(target);
    if (range) {
        debug('TestVersion: target is a range');
        const from = parse(range.from);
        const to   = parse(range.to);
        return !!(compare(version, from) >= 0 && compare(version, to) <= 0);
    }
    else {
        debug('TestVersion: target is not a range');
        let desc;
        const desc_result = test_desc(target);
        if (desc_result) {
            desc = desc_result.desc;
            target = desc_result.version;
        }
        target = parse(target);
        return !!match(version, target, desc);
    }
}

const match_chars   = ['*', 'x'];
const match_pattern = ['\\d+', '\\*', 'x'];
const match_regexp  = new RegExp("((?:" + match_pattern.join(")|(?:") + "))", 'g');
function parse (version) {
    debug("TestVersion: parsing " + version);
    version = version.toLowerCase().trim();
    if (version.match(/\s/)) {
        throw new Error('Version should not contain any empty chars');
    }
    version = version.match(match_regexp);
    let result = [];
    for (let i = 0; i < version.length; i++) {
        let item = version[i];
        if (match_chars.indexOf(item) >= 0) {
            result.push(item);
            continue;
        }
        item = parseInt(item);
        if (Number.isNaN(item)) {
            continue;
        }
        result.push(item); 
    }
    debug("TestVersion: parsing result is " + result);
    return result;
}

const range_pattern = ["~+", "\\.{2,}"];
const range_regexp  = new RegExp("^(.*?\\d+.*?)(?:(?:" + range_pattern.join(")|(?:") + "))+(.*?\\d+.*?)$");
function test_range (version) {
    debug('TestVersion: test range of ' + version);
    const matches = version.match(range_regexp);
    if (!matches) {
        debug('TestVersion: test range result is false');
        return null;
    }
    debug('TestVersion: test range result is [' + matches[1] + ', ' + matches[2] + ']');
    return {
        from: matches[1],
        to:   matches[2]
    };
}

const desc_pattern = ['~', '\\^', '>=?', '<=?', '\\!=?','='];
const desc_regexp  = new RegExp("^\\s*((?:" + desc_pattern.join(")|(?:") + "))(.*?\\d+.*?)$");
function test_desc (version) {
    debug('TestVersion: test desc of ' + version);
    const matches = version.match(desc_regexp);
    if (!matches) {
        debug('TestVersion: test desc result is false');
        return null;
    }
    debug('TestVersion: test desc result is ' + matches[1] + ', version is ' + matches[2]);
    return {
        desc: matches[1],
        version: matches[2]
    }
}

function match (v1, v2, desc) {
    debug('TestVersion: test if ' + v1 + ' matches ' + (desc ? desc + ' ' : '') + v2);
    const result = compare(v1, v2);
    if (result === 0 && (!desc || desc === '=' || desc === '>=' || desc === '<=' || desc === '~' || desc === '^')) {
        debug('TestVeresion: matched!');
        return true;
    }
    if (result > 0) {
        if (desc === '>=' || desc === '>' || desc === '!' || desc === '!=') {
            debug('TestVeresion: matched!');
            return true;
        }
        if (desc === '~' && result >= 3) {
            debug('TestVeresion: matched!');
            return true;
        }
        if (desc === '^' && result >= 2) {
            debug('TestVeresion: matched!');
            return true;
        }
    }
    if (result < 0 && (desc === '<=' || desc === '<' || desc === '!' || desc === '!=')) {
        debug('TestVeresion: matched!');
        return true;
    }
    debug('TestVeresion: NOT matched!');
    return false;
}

function compare (v1, v2) {
    debug('TestVersion: test compare ' + v1 + ' with ' + v2);
    if (!Array.isArray(v1) || !Array.isArray(v2)) {
        throw new Error('v1 and v2 should be parsed version');
    }
    for (let i = 0; i < v1.length || i < v2.length; i++) {
        let i1 = v1[i] || 0;
        let i2 = v2[i];
        if ('number' !== typeof i1) {
            throw new Error('Each item of v1 should be a number');
        }
        if ('number' !== typeof i2 && match_chars.indexOf(i2) < 0) {
            i2 = match_chars[0];
        }
        if (match_chars.indexOf(i2) >= 0) {
            debug('TestVersion: match pattern in the ' + th(i) + ' number, skip');
            continue;
        }
        if (i1 === i2) {
            debug('TestVersion: equal in this ' + th(i) + ' number, skip');
            continue;
        }
        if (i1 > i2) {
            debug('TestVersion: found greater in this ' + th(i) + ' number, return');
            return i + 1;
        }
        else {
            debug('TestVersion: found less in this ' + th(i) + ' number, return');
            return -(i + 1);
        }
    }
    debug('TestVersion: found equal in all number, return');
    return 0;
}

function th (n) {
    const i = n%10;
    let desc;
    switch (i) {
        case 1: desc = 'st'; break;
        case 2: desc = 'nd'; break;
        case 3: desc = 'rd'; break;
        default:desc = 'th'; break;
    }
    return n + desc;
}

module.exports = test_version;
debug('TestVersion: laoded');
