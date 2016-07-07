import Ember from 'ember';

const offices = [
  'Generálna prokuratúra',
  'Krajská prokuratúra Banská Bystrica',
  'Krajská prokuratúra Bratislava',
  'Krajská prokuratúra Košice',
  'Krajská prokuratúra Nitra',
  'Krajská prokuratúra Prešov',
  'Krajská prokuratúra Trenčín',
  'Krajská prokuratúra Trnava',
  'Krajská prokuratúra Žilina',
  'Okresná prokuratúra Banská Bystrica',
  'Okresná prokuratúra Bardejov',
  'Okresná prokuratúra Bratislava I',
  'Okresná prokuratúra Bratislava II',
  'Okresná prokuratúra Bratislava III',
  'Okresná prokuratúra Bratislava IV',
  'Okresná prokuratúra Bratislava V',
  'Okresná prokuratúra Brezno',
  'Okresná prokuratúra Dolný Kubín',
  'Okresná prokuratúra Dunajská Streda',
  'Okresná prokuratúra Galanta',
  'Okresná prokuratúra Humenné',
  'Okresná prokuratúra Kežmarok',
  'Okresná prokuratúra Komárno',
  'Okresná prokuratúra Košice I',
  'Okresná prokuratúra Košice II',
  'Okresná prokuratúra Košice okolie',
  'Okresná prokuratúra Levice',
  'Okresná prokuratúra Liptovský Mikuláš',
  'Okresná prokuratúra Lučenec',
  'Okresná prokuratúra Malacky',
  'Okresná prokuratúra Martin',
  'Okresná prokuratúra Michalovce',
  'Okresná prokuratúra Nitra',
  'Okresná prokuratúra Nové Mesto nad Váhom',
  'Okresná prokuratúra Nové Zámky',
  'Okresná prokuratúra Námestovo',
  'Okresná prokuratúra Partizánske',
  'Okresná prokuratúra Pezinok',
  'Okresná prokuratúra Piešťany',
  'Okresná prokuratúra Poprad',
  'Okresná prokuratúra Považská Bystrica',
  'Okresná prokuratúra Prešov',
  'Okresná prokuratúra Prievidza',
  'Okresná prokuratúra Revúca',
  'Okresná prokuratúra Rimavská Sobota',
  'Okresná prokuratúra Rožňava',
  'Okresná prokuratúra Ružomberok',
  'Okresná prokuratúra Senica',
  'Okresná prokuratúra Skalica',
  'Okresná prokuratúra Spišská Nová Ves',
  'Okresná prokuratúra Stará Ľubovňa',
  'Okresná prokuratúra Svidník',
  'Okresná prokuratúra Topoľčany',
  'Okresná prokuratúra Trebišov',
  'Okresná prokuratúra Trenčín',
  'Okresná prokuratúra Trnava',
  'Okresná prokuratúra Veľký Krtíš',
  'Okresná prokuratúra Vranov nad Topľou',
  'Okresná prokuratúra Zvolen',
  'Okresná prokuratúra Čadca',
  'Okresná prokuratúra Šaľa',
  'Okresná prokuratúra Žiar nad Hronom',
  'Okresná prokuratúra Žilina'
];

export default Ember.Route.extend({
  repository: Ember.inject.service('prosecutors-repository'),

  model() {
    return this.get('repository').all();
  },

  setupController(controller, model) {
    controller.set('offices', offices);
    controller.set('prosecutors', model);
  },

  deactivate() {
    this.get('controller').set('prosecutor', null);
  },

  actions: {
    close() {
      this.transitionTo('prosecutors');
    }
  }
});
