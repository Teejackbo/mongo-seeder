const uuid = require('uuid-mongodb');
const { Binary } = require('mongodb');
const convertUuidToBuffer = require('../utils/convertUuidToBuffer');

const convertType = item => {
    if (item === null) return null;
    if (typeof item === 'object') return convertTypes(item);
    if (typeof item !== 'string') return item;

    const [type, value] = item.split('|');

    if (type === 'luuid' || type === 'nuuid') {
        if (value) {
            const b = convertUuidToBuffer(value, type);
            return new Binary(b, Binary.SUBTYPE_UUID_OLD);
        }
        return uuid.v4();
    }

    if (type === 'date') {
        return value ? new Date(value) : new Date();
    }

    return item;
}

const convertTypes = obj => {
    const newObj = {};
    for (const item in obj) {
        newObj[item] = convertType(obj[item]);
    }
    return newObj;
}

module.exports = convertTypes;
