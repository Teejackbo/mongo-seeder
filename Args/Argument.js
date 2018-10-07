class Argument {
    constructor(command, value) {
        this._command = command;
        this.value = value;
        if (this._command.type.includes('list')) {
            this.value = this.value.split(',');
        }
    }

    handle(args) {
        if (this._command.handler) {
            this._command.handler(this, args);
        }
    }

    name() {
        return this._command.name;
    }
}

module.exports = Argument;
