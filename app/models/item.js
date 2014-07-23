'use strict';
var _ = require('lodash');
var cItem = global.mongodb.collection('items');

function Item(name, room, acquired, count, cost){
    this.name = name;
    this.room = room;
    this.acquired = new Date(acquired);
    this.count = parseInt(count);
    this.cost = parseInt(cost);
}

Item.prototype.save = function (cb) {
  cItem.save(this, function (err, obj){
  cb();
  });
};

Item.find = function(query, cb){
  cItem.find(query).toArray(function(err, items){
  cb(items);  
  });
};

Item.prototype.value = function (count, cost) {
  return this.count * this.cost;
};

Item.totalValue = function(query, cb){
  Item.find(query, function(items){
    var sum = 0;
    for (var i = 0; i < items.length; i++){
      var item = items [i];
      item = _.create(Item.prototype, item);
      sum += item.value();
    }
    cb(sum);
  });
};

module.exports = Item;


