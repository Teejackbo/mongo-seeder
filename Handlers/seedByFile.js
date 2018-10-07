const seedByFilePaths = require('../Database/seedByFilePaths');

module.exports = async (arg, args) => {
    const dbName = args.find(a => a.name() === 'dbName').value;
    await seedByFilePaths(dbName, arg.value);
};
