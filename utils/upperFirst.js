// Takes a string and replaces the first character with its uppercase version.
module.exports = string => string.replace(/^\w/, c => c.toUpperCase());
