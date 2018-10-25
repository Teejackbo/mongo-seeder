const upperFirst = require('./upperFirst');

module.exports = path => {
    const splitPath = path.split('.');
    // Gets the part of the path that corresponds to the collection name.
    const initialCollection = splitPath[splitPath.length - 2];
    // Removes underscores and replaces them with a capital letter.
    return initialCollection
        .split('_')
        .map(upperFirst)
        .join('');
};
