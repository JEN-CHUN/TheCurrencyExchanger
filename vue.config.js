const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/'  // This is whatever your path from the root is
//     : '/'
// }

module.exports = {
  publicPath: "./",
};

// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
// });
