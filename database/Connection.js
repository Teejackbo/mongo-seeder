const { MongoClient } = require('mongodb');
const ArgumentContainer = require('../args/ArgumentContainer');

/**
 * Connects to Mongo.
 */
class Connection {
    constructor() {
        const dbName = ArgumentContainer.valueOrDefault('dbName');
        const host = ArgumentContainer.valueOrDefault('host');
        const port = ArgumentContainer.valueOrDefault('port');
        this._dbName = dbName;
        this._connectionString = `mongodb://${host}:${port}/${dbName}`;
    }

    // Creates a connection to the db.
    async connect() {
        this._connection = await MongoClient.connect(
            this._connectionString,
            { useNewUrlParser: true },
        );
    }

    // Wrapper to execute Mongo code.
    async execute(callback) {
        try {
            if (!this._connection) {
                await this.connect();
            }
            callback(this._connection.db());
        } catch (e) {
            console.error(e);
        }
    }

    // Closes the connection.
    async close() {
        if (this._connection) {
            await this._connection.close();
        }
    }
}

module.exports = Connection;
