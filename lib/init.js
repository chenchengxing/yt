/**
 * init project
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */

var path = require('path');
var wrench = require('wrench');
var colors = require('colors');
var fs = require('fs');

module.exports = function ( name ) {
  var src = path.join(__dirname, '../seed'),
    dest = path.join(process.cwd(), name);
  if ( typeof name === 'string' ) {
    // body...
    console.log('initializating...'.inverse + name.rainbow);
    wrench.copyDirSyncRecursive(src, dest, {forceDelete: false});
    //resolve the bird-config file,set server path point to build
    fs.readFile(path.join(process.cwd(), name, 'bird-config.json'),{encoding: 'utf-8'}, function (err, data) {
      if (err) throw err;
      fs.writeFile(path.join(process.cwd(), name, 'bird-config.json'), data.replace('{{buildPath}}', path.join(process.cwd(), name, 'build').replace(/\\/g,'/')));
    })
    console.log('done.'.green);
  } else {
    console.log('Please specify project name!\n'.red + 'e.g. yt init app'.yellow);
  }
};