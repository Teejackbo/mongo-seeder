const readline = require('readline');
const getCollectionName = require('./getCollectionName');
const readJsonFile = require('./readJsonFile');
const colors = require('./colors');

module.exports = paths => {
    const seedData = {};
    paths.forEach(path => {
        const collection = getCollectionName(path);

        colors.write(`Reading data from ${path}...`);

        const data = readJsonFile(path);

        if (seedData[collection]) {
            seedData[collection].push(data);
        } else {
            seedData[collection] = [data];
        }

        readline.cursorTo(process.stdout, 0);
        colors.green('✔ ');
        colors.write(`Reading data from ${path}... `);
        colors.green('DONE\n');
    });

    return seedData;
}
