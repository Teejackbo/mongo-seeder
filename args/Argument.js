/**
 * An argument that the program is ran with.
 */
class Argument {
    constructor(command, value) {
        this._command = command;
        this.value = value;
        // If the value is a list, turns it into an array.
        if (this._command.type.includes('list')) {
            this.value = this.value.split(',');
        }
    }

    /**
     * Calls the handler for the argument.
     */
    handle(args) {
        if (this._command.handler) {
            this._command.handler(this, args);
        }
    }

    /**
     * Returns the name of the command.
     */
    name() {
        return this._command.name;
    }

    get flags() {
        return this._command.flags;
    }
}

module.exports = Argument;
