const convertToNuuid = require('./convertToNuuid');

module.exports = (uuid, type) => {
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
