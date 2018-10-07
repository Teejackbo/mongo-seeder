class ArgumentRunner {
    constructor(args) {
        this._args = args;
    }

    run() {
        this._args.forEach(arg => arg.handle(this._args));
    }
}

module.exports = ArgumentRunner;
