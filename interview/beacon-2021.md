'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



const https = require('https')

const fetch = (options = {}) => new Promise((resolve, reject) => {
    const req = https.request(options, res => {
        res.on('data', d => {
            resolve(d.toString());
        });
    });
    req.on('error', error => reject(error));
    req.end();
});
/*
 * Complete the 'topArticles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER limit as parameter.
 * base url for copy/paste:
 * https://jsonmock.hackerrank.com/api/articles?page=<pageNumber>
 */

const getOptions = (page = 1) => ({
    hostname: 'jsonmock.hackerrank.com',
    port: 443,
    path: `/api/articles?page=${page}`,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
});
        
const filterLogic = d => d.title || d.story_title;
const sortLogic = (a, b) => b.num_comments - a.num_comments;
const mapLogic = d => d.title || d.story_title;

async function topArticles(limit) {
    let _data = [];
    let totalResults;
    let i = 1;
    try {
        do {
            const { total, data } = JSON.parse(await fetch(getOptions(i)));
            totalResults = total;
            _data = _data.concat(data);
            i++;
        } while(_data.length < totalResults)
    } catch (err) {
        console.log('err', err);
    }
    _data = _data.filter(filterLogic).sort(sortLogic).slice(0, limit);
    const output = _data.map(mapLogic);
    return output;
}

/* using a for-loop
    const response = await fetch(getOptions());
    const { total_pages, data } = JSON.parse(response);
    _data = _data.concat(data);
    for (let i = 2; i <= total_pages; i++) {
        const response = await fetch(getOptions(i));
        const { data } = JSON.parse(response);
        _data = _data.concat(data);
    }
*/
async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const limit = parseInt(readLine().trim(), 10);

    const result = await topArticles(limit);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

