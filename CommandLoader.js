const commands = require('./commands');

/**
 * Loads commands from the command file.
 */
class CommandParser {
    constructor() {
        this._commands = this._loadCommands();
    }

    /**
     * Parses the data for each command (creates arrays from the right fields.)
     */
    _loadCommands() {
        commands.forEach(command => {
            for (const option in command) {
                // Don't turn the handler or name into an array
                if (option !== 'handler' && option !== 'name') {
                    command[option] = command[option].split('|');
                }
            }
        });
        return commands;
    }

    /**
     * Gets a command from the array.
     */
    getCommand(flag) {
        const command = this._commands.find(c => c.flags.includes(flag));
        if (command) return command;
        throw new Error('Command not found.');
    }
}

module.exports = CommandParser;
