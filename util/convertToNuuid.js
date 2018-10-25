module.exports = uuid => {
    const split = uuid.split('-');

    // Writes parts of the NUUID backwards to convert it to a LUUID.
    const converted = split.map((section, i) => {
        // Only the first 3 parts of the LUUID need to be re-written.
        if (i < 3) {
            // Splits the section into an array of sets of two characters.
            const charArray = section.match(/.{1,2}/g);
            return charArray.reverse().join('');
        }

        return section;
    });
    return converted.join('-');
}
