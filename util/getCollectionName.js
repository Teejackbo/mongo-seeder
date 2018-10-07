const upperFirst = require('./upperFirst');

module.exports = path => {
    const splitPath = path.split('.');
    const initialCollection = splitPath[splitPath.length - 2];
    return initialCollection
        .split('_')
        .map(upperFirst)
        .join('');
};
