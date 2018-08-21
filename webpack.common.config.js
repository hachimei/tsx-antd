const tsImportPluginFactory = require('ts-import-plugin')

     
module.exports = {
    entry: "./src/index.tsx",
    output: {
      // filename: "main.js",
      // filename: "main.js", // 生产环境打包时用
      chunkFilename: '[name].[chunkhash:5].chunk.js', // 开发环境热更新时用
      path: __dirname + "/dist", // 生产环境打包后路径
      publicPath: '/dist/' // 设置静态文件路径
    },
  
    devtool: "source-map",
  
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
  
    module: {
      rules: [
        { test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          options: {
            // 按需引入antd的组件，包括样式
            getCustomTransformers: () => ({
              before: [ tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: true
              }) ]
                }),
            },
          exclude: '/node_modules/'
      },
      // { test: /\.tsx?$/, loader: "awesome-typescript-loader"},
       
  
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

        { test: /\.css$/, loader: "style-loader!css-loader!less-loader  " },

        { test: /\.css$/, loader: "style-loader!css-loader?modules", exclude: '/node_modules/' },

        { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },

        { test: /\.(jpg|png|JPEG|gif)$/, loader: "url-loader" , options: { limit: 5000 } }
      ]
    },
  
    plugins: []

  };