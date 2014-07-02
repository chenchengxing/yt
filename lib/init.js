/**
 * init project
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */

var path = require('path');
var wrench = require('wrench');
var colors = require('colors');

module.exports = function ( name ) {
  var src = path.join(__dirname, '../seed'),
    dest = path.join(process.cwd(), name);
  if ( typeof name === 'string' ) {
    // body...
    console.log('initializating...'.inverse + name.rainbow);
    wrench.copyDirSyncRecursive(src, dest, {forceDelete: false});
    console.log('done.'.green);
  } else {
    console.log('Please specify project name!\n'.red + 'e.g. yt init app'.yellow);
  }
};