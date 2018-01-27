//当所使用的webpack的2.x 版本。需要require('path")
var path = require("path");
//引入htmlWebpackPlugin
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件，指定你要编译的文件是哪个
  // entry: './src/script/main.js',
  //可以为一个数组如：
  // entry: ['./src/script/main.js','./src/script/a.js'],
  //也可以为一个对象(但webpack2.x以上版本多个入口文件打包输出成一个文件会报错)如：
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  },
  //输出定义
  output: {
    //定义输出路径
    path: path.resolve(__dirname, './dist'),
    //相当于给生成的js前面加的绝对路径
    publicPath: 'http://lenovo.com/',
    //定义输出文件名称可以用三种占位符"[name],[hash],[chunkhash]"name:为入口的名字;hash:每次打包的一个哈希值;chunkhash:每个打包模块自己的哈希值并且前面可以加相对路径
    filename: 'js/[name]-[chunkhash].js'
  },
  //webpack安装后的插件定义
  plugins: [
    //使用htmlwebpackplugin这个插件
    new htmlWebpackPlugin({
      //定义模板文件是哪个（默认当前路径为项目根目录路径）
      template: 'index.html',
      //定义生成的html的名字（前面也可以加相对路径）
      filename: 'html/a.html',
      //指定生成的js插入到head标签中还是body标签中
      inject: 'head',
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
    }),
    //当为多页面应用时可以多次调用这个插件并修改其中的参数来实现
    new htmlWebpackPlugin({
      //定义模板文件是哪个（默认当前路径为项目根目录路径）
      template: 'index.html',
      //定义生成的html的名字（前面也可以加相对路径）
      filename: 'html/b.html',
      //指定生成的js插入到head标签中还是body标签中
      inject: 'head',
      //可以定义生成html中的title（需要在html的template中配合使用）
      title: 'webpack project title B',  //在模板html中写入<title><%= htmlWebpackPlugin.options.title%></title>
      //还可以随意定义变量让其显示在生成的html中，同样需要配合模板的html中写入
      list: new Date(),
      //打包压缩配置
      minify: {
        //删除注释
        removeComments: true,
        //删除空格
        collapseWhitespace: false
      }
    }),
    new htmlWebpackPlugin({
      //定义模板文件是哪个（默认当前路径为项目根目录路径）
      template: 'index.html',
      //定义生成的html的名字（前面也可以加相对路径）
      filename: 'html/c.html',
      //指定生成的js插入到head标签中还是body标签中
      inject: 'head',
      //可以定义生成html中的title（需要在html的template中配合使用）
      title: 'webpack project title C',  //在模板html中写入<title><%= htmlWebpackPlugin.options.title%></title>
      //还可以随意定义变量让其显示在生成的html中，同样需要配合模板的html中写入
      list: new Date(),
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