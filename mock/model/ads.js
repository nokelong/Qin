var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var config = require('../db/dbconfig');

function Ads(ads) {
    this.showWords = ads.showWords;
    this.tipsWords = ads.tipsWords;
    this.advertId = ads.advertId;
    this.imageUrl = ads.imageUrl;
    this.scriptLinkAttr = ads.scriptLinkAttr;
    this.showOrder = ads.showOrder;
}

Ads.prototype.save = function() {
    var ads = {
        showWords: this.showWords ,
        tipsWords: this.tipsWords,
        advertId: this.advertId,
        imageUrl: this.imageUrl ,
        scriptLinkAttr: this.scriptLinkAttr ,
        showOrder: this.showOrder 
    }
   
    MongoClient.connect(config.url, function(err, db) {
        db.collection('ads').insertOne(ads, {w:1}, function(error, result) {
        	assert.equal(null, error);                 
            db.close();
            return callback(error, result);
        });
    });
};

Ads.saveAll = function(list, callback) {
    MongoClient.connect(config.url, function(error, db) {
        if(error) {
            return callback(error);
        }
        db.collection('ads').insertMany(list, function(error, result) {
            assert.equal(list.length, result.insertedCount);
            db.close();
            return callback(error, result);
        });
    });
};
Ads.get  = function(callback) {
    
	MongoClient.connect(config.url, function(error, db) {
        if(error) {
        	return callback(error);
        }
        db.collection('ads').find().toArray(function(error, docs) {
            db.close();
            if (error) {
                return callback(error);
            }
            var ads = [];          
            docs.forEach(function(doc, index) {               
                var ad = new Ads(doc);             
                ads.push(ad);
            });                    
            return callback(null, ads);
        });
	});
}

module.exports = Ads;