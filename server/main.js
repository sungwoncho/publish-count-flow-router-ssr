import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

let Items = new Mongo.Collection('items');

Meteor.startup(function () {
  if (Items.find().count() === 0) {
    console.log('Generating items');
    for (var i = 0; i < 10; i++) {
      Items.insert({index: i});
    }
    console.log('Done generating items');
  }
});

Meteor.publish('items', function () {
  let cursor = Items.find();
  Counts.publish(this, 'itemCount', cursor);

  return cursor;
})
