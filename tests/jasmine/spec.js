// for basic functions tests
const   path = '../../build/js/',		// путь до файла
    testFile = require(`${path}index`);	// импортируем модуль
// const path = ;
/*
  Basic functions tests
*/
// describe("Jasmine", function() {
//   it("", function() {

//   });
// });

describe("Files in directory ", function () {
  it("generation the sh files", function () {
    setTimeout(function () {
      genBundle()
    }, 1000);
    fs.watchFile(path, function (curr, prev) {
      expect(curr.nlink != prev.nlink).toBe(true)
    });
  });
  // it("Synchronization modules in docs folder", function () {
  //   setTimeout(function () {
  //     gen.docs()
  //   }, 1000);
  //   fs.watch(path, (eventType, filename) => {
  //     expect(eventType).toBe(true)
  //   });
  // });
});
