const { readFileSync } = require('fs');
const Connection = require('./Connection');
const getCollectionName = require('../util/getCollectionName');

module.exports = async (dbName, paths) => {
    const conn = new Connection(dbName);
    const seedData = {};

    // For each file path.
    paths.forEach(path => {
        // Create a collection name from the file path.
        const collection = getCollectionName(path);

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

    // Seeds the data.
    await conn.execute(async db => {
        for (collection in seedData) {
            db.collection(collection).insertMany(seedData[collection]);
        }
    });
    // Closes the connection, to make sure we can exit the process.
    await conn.close();
};
