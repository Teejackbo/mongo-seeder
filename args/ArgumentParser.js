const CommandParser = require('./CommandParser');
const Argument = require('./Argument');

/**
 * Parses arguments that the program is called with.
 */
class ArgumentParser {
    constructor(args) {
        this._commandParser = new CommandParser();
        this._args = this._parse(args);
    }

    /**
     * Parses the arguments.
     * Separates the argument from its value.
     */
    _parse(args) {
        const parsed = args.map(arg => {
            if (arg.includes('=')) {
                const [flag, value] = arg.split('=');
                const command = this._commandParser.getCommand(flag);
                return new Argument(command, value);
            } else {
                const command = this._commandParser.getCommand(arg);
                return new Argument(command, null);
            }
        });

        return parsed;
    }

    getArgs() {
        return this._args;
    }
}

module.exports = ArgumentParser;
