import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('game');
  },

  actions: {

    saveGame(newGame) {
      newGame.save().then(() => this.transitionTo('games'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
