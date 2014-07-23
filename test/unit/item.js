
/* jshint expr:true */
/* global describe, it, before */

'use strict';

var expect = require('chai').expect;
var connect = require('../../app/lib/mongodb');
var Item;


describe('Item', function() {
  before(function(done){
    connect('home-inventory-test', function(){
    Item  = require('../../app/models/item.js');
      done();
    });
  });

  describe('constructor', function() {
    it('Should create new item', function() {
     console.log(global.mongodb);
      var item1 = new Item('couch', 'den', '3/4/2009',' 2','500');
      expect(item1).to.be.instanceof(Item);
      expect(item1.name).to.equal('couch');
      expect(item1.room).to.equal('den');
      expect(item1.acquired).to.be.instanceof(Date);
      expect(item1.count).to.be.a('number');
      expect(item1.count).to.equal(2);
      expect(item1.cost).to.be.a('number');
      expect(item1.cost).to.equal(500);
    });
  });
  describe('#save', function(){
    it('should save an item to mongo db', function(done){
    var item1 = new Item('couch', 'den', '3/4/2009',' 2','500');
    item1.save(function(){
      expect(item1._id).to.be.ok;
      done();
    });
    });
  });
});
