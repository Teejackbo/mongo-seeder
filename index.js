const ArgumentParser = require('./Args/ArgumentParser');
const ArgumentRunner = require('./Args/ArgumentRunner');

// Get process arguments
const [nodePath, filePath, ...args] = process.argv;
const parser = new ArgumentParser(args);

const parsedArgs = parser.getArgs();
const runner = new ArgumentRunner(parsedArgs);

// Run argument handlers.
runner.run();
