var Client = require('./lib/client').Client,
    debug = require('./lib/util').debug;

// Create a client
var createClient = function (options) {
  return new Client(options);
};

exports.createClient = createClient;
exports.debug = debug;