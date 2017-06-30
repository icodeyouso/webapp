import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
  });

  this.route('series', function() {
    this.route('new');
    this.route('edit', { path: '/:game_title/edit' });
  });

  this.route('games', function() {
    this.route('edit');
  });
});

export default Router;