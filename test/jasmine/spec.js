const fs = require('fs'),
  cl = require('node-cl-log');

const path = '../../build/',
  BundleSh = require(`${path}bundle`);
const newBundleConfig = [
  './data/',
  'bundle.sh',
  filesListOrder = [
    '1.sh',
    '2.sh',
    '3.sh'
  ]
];

const shBundle = new BundleSh(newBundleConfig);

describe("File in directory ", function () {
  it("generation the sh files", function () {
    setTimeout(function () {
      shBundle.genBundle();
    }, 1000);
    fs.watchFile(newBundleConfig[1], function (curr, prev) {
      if (curr.nlink != prev.nlink) cl.log(true);
    });
  });
});
