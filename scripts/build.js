const shell = require('shelljs');

shell.rm('-rf','dist')
shell.exec("webpack --config webpack.common.config.js --mode=production");
