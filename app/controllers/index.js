import Ember from 'ember';

export default Ember.Controller.extend({
  forecasts: '',

  actions: {
    searchWeather: function(){
      const cityName = this.get('cityName');
      this.store.queryRecord('forecast', { query: cityName }).then((forecasts) => {
        this.set('forecasts', forecasts);
      });
    }
  }
});
