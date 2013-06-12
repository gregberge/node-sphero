# sphero

Control Sphero robotic ball from node.js.

## Install

```
npm install sphero
```

## How to use

```javascript
var sphero = require('sphero');

var client = sphero.createClient();
client.connect(function () {
  client.getPowerState(function (err, data) {
    console.log(data);
  });
});
```

## License

MIT