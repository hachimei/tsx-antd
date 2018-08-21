const shell = require('shelljs');

if(shell.exec("webpack-dev-server --config webpack.dev.config.js").code !== 0){
    shell.exit(1);
}else{
    shell.exit(0);
}