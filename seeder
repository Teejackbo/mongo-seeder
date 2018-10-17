#!/usr/bin/node
const ArgumentParser = require('./args/ArgumentParser');
const ArgumentRunner = require('./args/ArgumentRunner');
const ArgumentContainer = require('./args/ArgumentContainer');

// Get process arguments
const [nodePath, filePath, ...args] = process.argv;
const parser = new ArgumentParser(args);

const parsedArgs = parser.getArgs();
ArgumentContainer.args = parsedArgs;

const runner = new ArgumentRunner();

// Run argument handlers.
runner.run();
