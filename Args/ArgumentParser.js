const CommandLoader = require('../CommandLoader');
const Argument = require('./Argument');

class ArgumentParser {
    constructor(args) {
        this._commandLoader = new CommandLoader();
        this._args = this._parse(args);
    }

    _parse(args) {
        const parsed = args.map(arg => {
            if (arg.includes('=')) {
                const [flag, value] = arg.split('=');
                const command = this._commandLoader.getCommand(flag);
                return new Argument(command, value);
            } else {
                const command = this._commandLoader.getCommand(arg);
                return new Argument(command);
            }
        });

        return parsed;
    }

    getArgs() {
        return this._args;
    }
}

module.exports = ArgumentParser;
