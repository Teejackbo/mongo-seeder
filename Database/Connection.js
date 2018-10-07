const { MongoClient } = require('mongodb');

/**
 * Connects to Mongo.
 */
class Connection {
    constructor(dbName, url = 'mongodb://localhost:27017/') {
        this._dbName = dbName;
        this._connectionString = url + dbName;
    }

    // Creates a connection to the db.
    async connect() {
        this._connection = await MongoClient.connect(this._connectionString);
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
