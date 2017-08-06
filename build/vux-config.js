'use strict'

const path = require('path')
const fs = require('fs')


module.exports = {
  options: {   
    vuxWriteFile: false,
    env: 'dev'
  },
  plugins: [
    'vux-ui', 'inline-manifest', 'progress-bar', 'duplicate-style',
    {
      name: 'js-parser',
      test: /main\.js/,
      fn: function (source) {    
        let str = []     
        // 404 page
        str.push(`{
          path: '*',
          component: () => import('./demos/NotFoundComponent.vue').then(m => m.default)
        }`)

        str = `[${str.join(',\n')}]`
        source = source.replace('const routes = []', 'const routes = ' + str)
        return source
      }
    }
  ]
}