module.exports = {
    green() {
        process.stdout.write('\x1b[32m');
    },

    reset() {
        process.stdout.write('\x1b[0m');
    },
};
