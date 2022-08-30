const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  stats: 'errors-warnings', //в консоли ничего лишнего тольео ошибки и предупреждения 
  devServer: {
    static: {
      directory: "/Users/youngsandwich/web/2022/1st-steps", // путь откуда индекс открывает 
    },
    port: 5555, //порт
    open: true, //автооткрытие страницы
    client: { //ошибки в консоли
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};