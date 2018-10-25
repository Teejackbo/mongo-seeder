const uuid = require('uuid-mongodb');
const { Binary } = require('mongodb');

// Write the first 16 bytes backwards if it is a NUUID.
const convertToBuffer = (uuid, type) => {
    const b = new Buffer(16);
    if (type === 'nuuid') uuid = convertToNuuid(uuid);
    const split = uuid.split('-').join('');
    const charArray = split.match(/.{1,2}/g);
    charArray.forEach((char, i) => b.writeUInt8(
        parseInt(char, 16),
        i
    ));

    return b;
}

const convertToNuuid = uuid => {
    const split = uuid.split('-');
    const converted = split.map((section, i) => {
        if (i < 3) {
            const charArray = section.match(/.{1,2}/g);
            return charArray.reverse().join('');
        }
        return section;
    });
    return converted.join('-');
}

// This is disgusting but it works.
const convertType = item => {
    console.log(item);
    // If it is a string (checks in case it is an object for recursion)
    if (typeof item === 'string') {
        // Split it by the pipe to get the type and the value.
        const [type, value] = item.split('|');
        // Create a buffer to convert to binary.
        if (type === 'luuid' || type === 'nuuid') {
            if (value) {
                const b = convertToBuffer(value, type);
                return new Binary(b, Binary.SUBTYPE_UUID_OLD);
            }
            // Create an ID and convert to binary.
            const id = uuid.v4();
            return id;
        }

        // If it is a date then treat is as such.
        if (type === 'date') {
            let date = new Date();
            if (value) date = new Date(value);
            return date;
        }
    }

    if (item === null) return null;

    // Works recursively, if it is an object then runs through again.
    if (typeof item === 'object') return iterateThrough(item);

    // Returns the original item.
    return item;
}

// Iterates through an object and converts the types.
const iterateThrough = obj => {
    const newObj = {};
    for (const item in obj) {
        newObj[item] = convertType(obj[item]);
    }
    return newObj;
}

module.exports = iterateThrough;
