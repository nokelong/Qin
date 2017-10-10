# Qin

> This is a fun vue project Qin,build with Vue 2.0 , vue-router 2.0 , axios and vux plugin
### Introduction
`Qin` is the used vue 2.0 and vue-router 2.0 for [Vue.js](http://vuejs.org). It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. One point novel site Features include:

src/views structure
- index
- login
- noveldetail
- novelcatalog
- search
- reader
- regist
- usercenter



The story continues...

### Development Setup

``` bash
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

Copyright (c) 2013-2017 Noke long
