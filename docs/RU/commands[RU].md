<a name="вручную_комманды"></a>
### Как подключить вручную

Чтобы подключить `sh-bundler` в ваш проект, воспользуйтесь командами.
```javascript
const BundleSh = require('./build/bundle');
```

Для передачи настроек для создания бандла используйте массив из 3-х элементов.Описание элементов массива описаны [тут](#публичное_api)
```javascript
const newBundleConfig = [
  './data/',
  'bundle.sh',
  filesListOrder = [
    '1.sh',
    '2.sh',
    '3.sh'
  ]
];
```

Передайте сборщику бандла вашу конфигурацию.
```javascript
const bundle = new BundleSh(newBundleConfig);
```

Вызовите метод `.genBundle()` для сборки бандла.
```javascript
bundle.genBundle();
```
