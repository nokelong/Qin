//初始化数据库
//初始化novels, ads db
var fs      = require('fs');
var Novel   = require('../model/novel');
var Ads     = require('../model/ads');
var Catalog = require('../model/catalog');

//存入男生小说数据
fs.readFile('./data/boysColumn.json', function(error,data) {
    
    if(error) return console.error(error);

    var json = JSON.parse(data);
    var list = json.body.list;
    console.log(Novel.get)
    list.forEach(function(list) {
        list['recId'] = '100'
    });
    Novel.saveAll(list,function() {
        console.log('男生小说数据----保存数据成功')
    });
});

//存入女生小说数据
fs.readFile('./data/girlsColumn.json', function(error,data) {
    
    if(error) return console.error(error);

    var json = JSON.parse(data);
    var list = json.body.list;
    list.forEach(function(list) {
        list['recId'] = '101'
    });
    Novel.saveAll(list,function() {
        console.log('女生小说数据----保存数据成功')
    });
});

//存入广告数据
fs.readFile('./data/positioncontent.json', function(error,data) {
    
    if(error) return console.error(error);

    var json = JSON.parse(data);
    var list = json.body.list;
    Ads.saveAll(list,function(error) {
        console.log('广告数据---保存数据成功')
    });
});

//小说目录数据
fs.readFile('./data/catalog.json', function(error,data) {
    
    if(error) return console.error(error);

    var json = JSON.parse(data);
    var list = json.body.items;
    Catalog.saveAll(list,function(error) {
        console.log('目录数据---保存数据成功')
    });
});