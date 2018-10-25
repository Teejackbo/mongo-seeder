let _commands = [];

class CommandContainer {
    static get commands() {
        return _commands;
    }

    static set commands(commands) {
        _commands = commands;
    }

    static find(flag) {
        const command = _commands.find(
            c => c.flags.includes(flag) || c.name === flag,
        );
        if (command) return command;
        throw new Error(`${flag} is not a defined command.`);
    }
}

module.exports = CommandContainer;
