/**
 * Usage:
 * require('pingpong')(app);
 * require('pingpong')('api/', app);
 */
module.exports = function(prefix, app) {
  if (app === undefined) {
    app = prefix;
    prefix = '/';
  } else {
    if (prefix[prefix.length - 1] !== '/') {
      prefix = prefix + '/';
    }
    if (prefix[0] !== '/') {
      prefix = '/' + prefix;
    }
  }
  app.get(prefix + 'ping', function(req, res) {
    res.send('pong');
  });
};
