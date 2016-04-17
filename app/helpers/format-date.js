import Ember from 'ember';
import moment from 'moment';

export function formatDate(date) {
  return moment(date[0]*1000).format("DD/MM/YYYY");
}

export default Ember.Helper.helper(formatDate);
