/**
 * This is the config file for available commands.
 *
 * If the type of a command has a value associated with it, it expects it immediately after an =.
 * e.g --name="example"
 */
module.exports = [
    {
        name: 'seedByFile',
        flags: '--files|-F',
        type: 'list',
        handler: require('./handlers/seedByFile'),
    },
    {
        name: 'seedByGlob',
        flags: '--glob|-G',
        type: 'glob',
        handler: require('./handlers/seedByGlob'),
    },
    {
        name: 'dbName',
        flags: '--name|-N',
        type: 'string',
        default: 'mongo-seeder',
    },
    {
        name: 'host',
        flags: '--host|-H',
        type: 'string',
        default: 'localhost',
    },
    {
        name: 'port',
        flags: '--port|-P',
        type: 'string',
        default: '27017',
    },
];
