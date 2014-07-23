/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Item  = require('../../app/models/item.js');

describe('Item', function() {
  describe('constructor', function() {
    it('Should create new item', function() {
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
});
