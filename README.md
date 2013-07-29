# sphero [![Build Status](https://travis-ci.org/neoziro/node-sphero.png?branch=master)](https://travis-ci.org/neoziro/node-sphero)

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
  client.color('red');
});
```

## License

MIT