const glob = require('glob-promise');
const seedByFilePaths = require('../Database/seedByFilePaths');

module.exports = async (arg, args) => {
    // Finds the db name from the list of args.
    const dbName = args.find(a => a.name() === 'dbName').value;

    // Transforms the glob into an array of file paths.
    const paths = await glob(arg.value);
    await seedByFilePaths(dbName, paths);
};
