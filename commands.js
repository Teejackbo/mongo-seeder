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
        handler: require('./Handlers/seedByFile'),
    },
    {
        name: 'seedByGlob',
        flags: '--glob|-G',
        type: 'glob',
        handler: require('./Handlers/seedByGlob'),
    },
    {
        name: 'dbName',
        flags: '--name|-N',
        type: 'string',
    },
];
