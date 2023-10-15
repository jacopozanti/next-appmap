#! /usr/bin/env node

//var shell = require("shelljs");
// shell.exec("pnpm help"); // Execute things on shell

const dirTree = require("directory-tree");
const tree = dirTree(
  ".", 
  {
    attributes: ["type", "extension"],
    extensions: /\.(js|ts|tsx)$/,
    exclude: [/node_modules/, /.git/],
  }
);

console.log(tree);