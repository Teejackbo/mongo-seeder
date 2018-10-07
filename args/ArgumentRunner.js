const ArgumentContainer = require('./ArgumentContainer');

class ArgumentRunner {
    constructor() {
        this._args = ArgumentContainer.args;
    }

    /**
     * Calls the handler for each argument.
     */
    run() {
        this._args.forEach(arg => arg.handle(this._args));
    }
}

module.exports = ArgumentRunner;
