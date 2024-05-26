module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: './dist',
  devServer:{
    host:'0.0.0.0',
    port: 5414,
    proxy:{
      "/dev":{
        target:"http://localhost:8085/api", //http://localhost:5414/
        // target:"http://192.168.2.200:8085",
        changeOrigin:true,
        pathRewrite:{
          '^/dev':''
        }
      }
    },
  },
  productionSourceMap: false,
  pwa:{
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
}
