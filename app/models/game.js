import DS from 'ember-data';

export default DS.Model.extend({
  eastScore: DS.attr('number'),
  westScore: DS.attr('number'),
  title: DS.attr('string')
});
