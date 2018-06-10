Before running tests for cli add rights the performing file - ex: chmod 755 index.js.

В проекте стараются поддерживать стиль по написанию кода от [AirBnb](docs/airBnb/). На его и настроено линтерование кода.

Для написания коментариев для документации с помощью  вы можете воспользоваться информацией [отсюда](docs/jsDoc/guide/)



const fs = require('fs'),
      cl = require('node-cl-log');
const filesListOrder = [
  '1.sh',
  '2.sh',
  '2.sh'];

const BundleSh = require('./build/bundle');
const newBundleConfig = [
  './data/',
  'bundle.sh',
  filesListOrder = [
    '1.sh',
    '2.sh',
    '3.sh'
  ]
];
const bundle = new BundleSh(newBundleConfig);
bundle.genBundle();
