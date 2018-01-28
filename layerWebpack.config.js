//当所使用的webpack的2.x 版本。需要require('path")
var path = require("path");
//引入htmlWebpackPlugin
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件，指定你要编译的文件是哪个
  entry: './src/app.js',
  //输出定义
  output: {
    //定义输出路径
    path: path.resolve(__dirname, './dist'),
    //相当于给生成的js前面加的绝对路径
    //定义输出文件名称可以用三种占位符"[name],[hash],[chunkhash]"name:为入口的名字;hash:每次打包的一个哈希值;chunkhash:每个打包模块自己的哈希值并且前面可以加相对路径
    filename: 'js/[name].bundle.js'
  },
  //用babel编译转换文件
  module: {
    loaders: [
      {
        //test中定义正则表达式去匹配你要编译转化你的文件
        test: /\.js$/,
        //loader定义对于这种文件用那种loader去编译转换
        loader: 'babel-loader',
        //排除编译范围
        exclude: [
          path.resolve('./node-modules')
        ],
        //定义编译范围
        include: [
          path.resolve('./src')
        ],
        //定义编译类型，如es2016或者es2017等
        //或者可以在根目录下建一个.babelrc文件去定义编译的文件类型
        //再或者可以在package.json中去定义一个babel的对象
        query: {
          //lastest代表所有，包括es2015，es2016，es2017等
          presets: ['latest']
        }
      },
      {
        test: /\.css$!\.less$!\.sass$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  //webpack安装后的插件定义
  plugins: [
    //使用htmlwebpackplugin这个插件
    new htmlWebpackPlugin({
      //定义模板文件是哪个（默认当前路径为项目根目录路径）
      template: 'layerIndex.html',
      //定义生成的html的名字（前面也可以加相对路径）
      filename: 'html/index.html',
      //指定生成的js插入到head标签中还是body标签中
      inject: 'body',
      //可以定义生成html中的title（需要在html的template中配合使用）
      title: 'webpack project title A',  //在模板html中写入<title><%= htmlWebpackPlugin.options.title%></title>
      //还可以随意定义变量让其显示在生成的html中，同样需要配合模板的html中写入
      list: new Date(),
      //chunks中定义此模板中指定使用的js文件名称
      chunks: ['main','a'],
      //只除了数组中的其他的都会被加载进来
      excludeChunks: ['b','c'],
      //打包压缩配置
      minify: {
        //删除注释
        removeComments: true,
        //删除空格
        collapseWhitespace: false
      }
    })
  ]
};