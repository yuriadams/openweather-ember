import DS from 'ember-data';

export default DS.Model.extend({
  city_name: DS.attr('string'),
  list: DS.attr('array')
});
