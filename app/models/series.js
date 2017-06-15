import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  games: DS.hasMany('game'),
  eastTeam: DS.attr('string'),
  westTeam: DS.attr('string')
});
