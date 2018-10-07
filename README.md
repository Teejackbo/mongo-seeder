# Mongo Seeder

## Overview

This is a utility that allows you to seed a Mongo database with data from JSON files.

It is a command line application, called with the command `mongo-seeder`.

## Argument Syntax

Any arguments that take data are expected to be joined to the flag with an `=`.
Example:

```bash
mongo-seeder --name=example_database --glob="data/**/*.json"
mongo-seeder -N=another_example --files="data/file1.json,data/file2.json"
```

## Options

-   `--name`/`-N` - This flag specifies the name of the database to seed.
-   `--files`/`-F` - This flag specifies files to seed the database with. Expects a comma separated list.
-   `--glob`/`-G` - This flag specifies a glob to use to seed the database.
