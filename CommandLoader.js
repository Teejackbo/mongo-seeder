const commands = require('./commands');

class CommandParser {
    constructor() {
        this._commands = this._loadCommands();
    }

    _loadCommands() {
        commands.forEach(command => {
            for (const option in command) {
                if (option !== 'handler' && option !== 'name') {
                    command[option] = command[option].split('|');
                }
            }
        });
        return commands;
    }

    getCommand(flag) {
        const command = this._commands.find(c => c.flags.includes(flag));
        if (command) return command;
        throw new Error('Command not found.');
    }
}

module.exports = CommandParser;
