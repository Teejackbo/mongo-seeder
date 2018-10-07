class ArgumentRunner {
    constructor(args) {
        this._args = args;
    }

    /**
     * Calls the handler for each argument.
     */
    run() {
        this._args.forEach(arg => arg.handle(this._args));
    }
}

module.exports = ArgumentRunner;
