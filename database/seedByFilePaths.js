const { readFileSync } = require('fs');
const readline = require('readline');
const Connection = require('./Connection');
const getCollectionName = require('../util/getCollectionName');
const colors = require('../util/colors');

module.exports = async (dbName, paths) => {
    const conn = new Connection(dbName);
    const seedData = {};

    // For each file path.
    paths.forEach(path => {
        // Create a collection name from the file path.
        const collection = getCollectionName(path);

        // Write whats happening to stdout with fancy colours.
        colors.write(`Reading data from ${path}...`);
        readline.cursorTo(process.stdout, 0);
        colors.green('✔ ');
        colors.write(`Reading data from ${path}... `);
        colors.green('DONE\n');

        // Reads the data from the file.
        const data = readFileSync(path).toString('utf8');
        if (data === '') throw new Error(`${path} contains no data.`);

        // Organises the data ready for seeding.
        if (seedData[collection]) {
            seedData[collection].push(JSON.parse(data));
        } else {
            seedData[collection] = [JSON.parse(data)];
        }
    });

    colors.write(`Seeding data...`);
    // Seeds the data.
    await conn.execute(async db => {
        for (collection in seedData) {
            db.collection(collection).insertMany(seedData[collection]);
        }
    });
    // Closes the connection, to make sure we can exit the process.
    await conn.close();

    // More fancy colours.
    readline.cursorTo(process.stdout, 0);
    colors.green('✔ ');
    colors.write('Seeding data... ');
    colors.green('DONE\n');
};
