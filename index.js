#!/usr/bin/node
const ArgumentParser = require('./args/ArgumentParser');
const ArgumentRunner = require('./args/ArgumentRunner');

// Get process arguments
const [nodePath, filePath, ...args] = process.argv;
const parser = new ArgumentParser(args);

const parsedArgs = parser.getArgs();
const runner = new ArgumentRunner(parsedArgs);

// Run argument handlers.
runner.run();
