const seedByFilePaths = require('../database/seedByFilePaths');

module.exports = async (arg, args) => {
    await seedByFilePaths(arg.value);
};
