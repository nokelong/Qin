# Qin

> This is a fun vue project Qin,build with Vue 2.0 , vue-router 2.0 , axios and vux plugin
### Introduction
`Qin` is the use vue 2.0 and vue-router 2.0 for [Vue.js](http://vuejs.org). It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. One point novel site Features include:

## Project structure tree
```
├─build
├─config
├─mock
│  ├─controllers
│  ├─db
│  │  └─data
│  ├─middlewares
│  ├─model
│  └─routes
├─src
│  ├─assets
│  │  ├─css
│  │  ├─images
│  │  └─webfont
│  ├─components
│  ├─router
│  │  ├─hooks
│  │  │  └─beforeEach
│  │  └─map
│  ├─services
│  │  └─xhr
│  ├─utils
│  └─views
│      ├─index
│      │  └─_components
│      ├─login
│      ├─novelcatalog
│      ├─noveldetail
│      ├─novelindex
│      ├─publishComment
│      ├─reader
│      ├─regist
│      ├─search
│      │  └─_components
│      └─usercenter
├─static
│  └─plugin
└─test
    └─unit
        └─specs
```
## Project structure map

> If you need a new component, don't hesitate to raise an issue.

> The diagram is made with [coggle](https://coggle.it/)

<p align="center">
	<img src="https://github.com/nokelong/Qin/blob/master/src/assets/images/Qin.png" width="980">
</p>

The story continues...

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
node mock/db/initDB.js

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
