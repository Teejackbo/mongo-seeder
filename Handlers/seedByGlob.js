const glob = require('glob-promise');
const seedByFilePaths = require('../Database/seedByFilePaths');

module.exports = async (arg, args) => {
    const dbName = args.find(a => a.name() === 'dbName').value;
    const paths = await glob(arg.value);
    await seedByFilePaths(dbName, paths);
};
