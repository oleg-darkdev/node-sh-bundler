const fs = require('fs'),
      cl = require('node-cl-log');
/*
  @description Is responsible for assembly of several *.sh files in one bandl in a certain order which is described in the file.
  @param Takes all files from the transferred directory.
  @param The file (assembly) collects in transferred.
  @param Order of turn in which files from the first argument will gather in the file from the second argument.
*/
class BundleSh {
  constructor(pathSrcSh, pathBuildSh, filesListOrder) {
    this.pathSrcSh = pathSrcSh;
    this.pathBuildSh = pathBuildSh;
    this.filesListOrder = filesListOrder
  }
  genBundle() {
    const bundleShArr = [],
      pathSrcSh = this.pathSrcSh,
      pathBuildSh = this.pathBuildSh,
      filesListOrder = this.filesListOrder;

    fs.readdir(pathSrcSh, function (err, items) {
      // create new array with elements in the necessary order
      filesListOrder.forEach(el => {
        bundleShArr.push(items[items.indexOf(el)]);
      });
      // cl.log(bundleShArr )
      // cl.log(items )
      bundleShArr.forEach(el => {
        fs.readFile(pathSrcSh + el, function (err, data) {
          if (err) {
            cl.log(err);
          } else {
            // cl.log(data); // file content
            fs.open(pathBuildSh, "w+", function (err, fileHandle) {
              if (!err) {
                fs.appendFile(pathBuildSh, data, function (err) {
                  cl.gre(`Assembly of a bandl has taken place successfully, you can take away the collected file ${pathBuildSh}`);
                  if (err) throw err;
                });
              } else {
                cl.red(`There was an error creating ${pathBuildSh}`);
              }
            });
          };
        });
      });
    });
  };
};
export default BundleSh;
