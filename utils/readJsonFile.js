const { readFileSync } = require('fs');
const convertTypes = require('../database/convertTypes');

module.exports = path => {
    const data = readFileSync(path).toString('utf8');
    if (data === '') throw new Error(`${path} contains no data.`);

    return convertTypes(JSON.parse(data));
}
