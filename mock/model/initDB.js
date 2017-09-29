//初始化数据库
//初始化novels, ads db
var fs = require('fs');
var Novel = require('./novel');
var Ads = require('./ads');

//存入男生小说数据
fs.readFile('../db/boysColumn.json', function(error,data) {
    
    if(error) return console.error(error);

    var json = JSON.parse(data);
    var list = json.body.list;
    console.log(Novel.get)
    list.forEach(function(list) {
        list['recId'] = '100'
    });
    Novel.saveAll(list,function() {
        console.log('boysColumn----保存数据成功')
    });
});
//存入女生小说数据
fs.readFile('../db/girlsColumn.json', function(error,data) {
    
    if(error) return console.error(error);

    var json = JSON.parse(data);
    var list = json.body.list;
    list.forEach(function(list) {
        list['recId'] = '101'
    });
    Novel.saveAll(list,function() {
        console.log('girlsColumn----保存数据成功')
    });
});

//存入广告数据
fs.readFile('../db/positioncontent.json', function(error,data) {
    
    if(error) return console.error(error);

    var json = JSON.parse(data);
    var list = json.body.list;
    Ads.saveAll(list,function(error) {
        console.log('positioncontent---保存数据成功')
    });
});
