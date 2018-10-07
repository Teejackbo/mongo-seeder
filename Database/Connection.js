const { MongoClient } = require('mongodb');

class Connection {
    constructor(dbName, url = 'mongodb://localhost:27017/') {
        this._dbName = dbName;
        this._connectionString = url + dbName;
    }

    async connect() {
        this._connection = await MongoClient.connect(this._connectionString);
    }

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

    async close() {
        if (this._connection) {
            await this._connection.close();
        }
    }
}

module.exports = Connection;
