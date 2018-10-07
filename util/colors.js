module.exports = {
    green(text) {
        process.stdout.write('\x1b[32m');
        process.stdout.write(text);
        this.reset();
    },

    reset() {
        process.stdout.write('\x1b[0m');
    },

    write(text) {
        process.stdout.write(text);
    },
};
