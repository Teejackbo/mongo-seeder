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
