import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';

FlowRouter.route('/', {
  action() {
    Tracker.autorun(function () {
      if (Meteor.subscribe('items').ready()) {
        let count = Counts.get('itemCount');
        console.log('item count is', count);
      };
    });
  }
})
