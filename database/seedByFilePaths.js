const readline = require('readline');
const Connection = require('./Connection');
const colors = require('../util/colors');
const parseData = require('../util/parseData');

module.exports = async paths => {
    const conn = new Connection();
    const seedData = parseData(paths);

    colors.write(`Seeding data...`);

    await conn.execute(async db => {
        for (collection in seedData) {
            db.collection(collection).insertMany(seedData[collection]);
        }
    });

    await conn.close();

    readline.cursorTo(process.stdout, 0);
    colors.green('✔ ');
    colors.write('Seeding data... ');
    colors.green('DONE\n');
};
