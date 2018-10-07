const glob = require('glob-promise');
const seedByFilePaths = require('../database/seedByFilePaths');

module.exports = async (arg, args) => {
    // Transforms the glob into an array of file paths.
    const paths = await glob(arg.value);

    await seedByFilePaths(paths);
};
