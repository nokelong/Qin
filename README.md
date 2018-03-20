# Qin Novel Site Project 

> This is a novel site project build with Vue 2.0 , vue-router 2.0 , axios and vux plugin.

### Introduction
`Qin` is the use vue 2.0 and vue-router 2.0 for [Vue.js](http://vuejs.org). It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. One Point Novel Site Features include:

## Project Structure Tree
```
|   .babelrc
|   .editorconfig
|   .gitignore
|   .postcssrc.js
|   index.html
|   package.json
|   README.md
|   
+---build
|       build.js
|       check-versions.js
|       dev-client.js
|       dev-server.js
|       utils.js
|       vue-loader.conf.js
|       vux-config.js
|       webpack.base.conf.js
|       webpack.dev.conf.js
|       webpack.prod.conf.js
|       webpack.test.conf.js
|       
+---config
|       dev.env.js
|       index.js
|       prod.env.js
|       test.env.js
|       
+---mock
|   |   app.js
|   |   
|   +---controllers
|   |       adsCtr.js
|   |       authCtr.js
|   |       commentCtr.js
|   |       novelCtr.js
|   |       
|   +---db
|   |   |   dbconfig.js
|   |   |   initDatabase.js
|   |   |   
|   |   \---data
|   |           boysColumn.json
|   |           catalog.json
|   |           columnDetail.json
|   |           girlsColumn.json
|   |           infoColumn.json
|   |           positioncontent.json
|   |           
|   +---middlewares
|   |       ajaxReturn.js
|   |       
|   +---model
|   |       ads.js
|   |       catalog.js
|   |       comment.js
|   |       novel.js
|   |       user.js
|   |       
|   \---routes
|           index.js
|           novel.js
|           
+---src
|   |   App.vue
|   |   main.js
|   |   
|   +---assets
|   |   +---css
|   |   |       main.css
|   |   |       
|   |   +---images
|   |   |       banner01.jpg
|   |   |       i-tab1.png
|   |   |       i-tab2.png
|   |   |       i-tab3.png
|   |   |       i-tab4.png
|   |   |       i-tabBoy.png
|   |   |       i-tabGril.png
|   |   |       i-tabMan.png
|   |   |       loading.gif
|   |   |       Qin.png
|   |   |       Qin时序图.png
|   |   |       userC.png
|   |   |       wap_cloudmail24.png
|   |   |       
|   |   \---webfont
|   |           iconfont.eot
|   |           iconfont.svg
|   |           iconfont.ttf
|   |           iconfont.woff
|   |           
|   +---components
|   |       Catalog.vue
|   |       Comment.vue
|   |       Info.vue
|   |       Novel.vue
|   |       TopHeader.vue
|   |       
|   +---router
|   |   |   index.js
|   |   |   
|   |   +---hooks
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---beforeEach
|   |   |           authInterceptor.js
|   |   |           
|   |   \---map
|   |           index.js
|   |           novel.js
|   |           user.js
|   |           
|   +---services
|   |   |   authServices.js
|   |   |   infoServices.js
|   |   |   novelServices.js
|   |   |   
|   |   \---xhr
|   |           config.js
|   |           httpClient.js
|   |           
|   +---utils
|   |       cookie.js
|   |       Slide.js
|   |       tips.js
|   |       utils.js
|   |       
|   \---views
|       |   index.vue
|       |   
|       +---index
|       |   |   index.vue
|       |   |   
|       |   \---_components
|       |           Carousel.vue
|       |           Layout.vue
|       |           Newinfo.vue
|       |           TabMenu.vue
|       |           
|       +---login
|       |       index.vue
|       |       
|       +---novelcatalog
|       |       index.vue
|       |       
|       +---noveldetail
|       |       index.vue
|       |       
|       +---novelindex
|       |       index.vue
|       |       
|       +---publishComment
|       |       index.vue
|       |       
|       +---reader
|       |       index.vue
|       |       
|       +---regist
|       |       index.vue
|       |       
|       +---search
|       |   |   index.vue
|       |   |   
|       |   \---_components
|       |           HotWords.vue
|       |           SearchResult.vue
|       |           
|       \---usercenter
|               index.vue
|               
\---test
    \---unit
        |   .eslintrc
        |   index.js
        |   karma.conf.js
        |   
        \---specs
                Hello.spec.js
```
## Project Structure Map

> If you need a new component, don't hesitate to raise an issue.

> The diagram is made with [coggle](https://coggle.it/)

<p align="center">
	<img src="https://github.com/nokelong/Qin/blob/master/src/assets/images/Qin.png" width="980">
</p>
   
The Story continues...

### Development Setup

``` bash
# clone the project 
git clone git@github.com:nokelong/Qin.git

# install dependencies
npm install

# start mongodb server [mongodb install in D:\mongodb]
mongod --dbpath=D:\mongodb\data\db
# or win 32bit system
mongod --dbpath=D:\mongodb\data\db --journal

# init mongodb database [qindb]
node mock/db/initDatabase.js

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
## Contribution
Please make sure to read the [Contributing Guide](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md) before making a pull request.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present Noke
