'use strict';

const unconfig = require('unconfig');

async function hello() {
  const { config, sources } = await unconfig.loadConfig({
    sources: [
      {
        files: "my.config",
        extensions: ["ts", "mts", "cts", "js", "mjs", "cjs", "json", ""]
      }
    ],
    merge: false
  });
  console.log(config);
}

exports.hello = hello;
