import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('game');
  },
  actions: {

    deleteGame(game) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        game.destroyRecord();
      }
    }
  }

})

