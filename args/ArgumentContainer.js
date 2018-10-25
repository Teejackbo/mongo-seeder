const CommandContainer = require('./CommandContainer');

let _args = [];

class ArgumentContainer {
    static get args() {
        return _args;
    }

    static set args(args) {
        _args = args;
    }

    static valueOrDefault(flag) {
        const arg = _args.find(
            a => a.flags.includes(flag) || a.name() === flag,
        );
        if (arg) return arg.value;
        const command = CommandContainer.find(flag);
        if (command.default) return command.default;
        return null;
    }
}

module.exports = ArgumentContainer;
