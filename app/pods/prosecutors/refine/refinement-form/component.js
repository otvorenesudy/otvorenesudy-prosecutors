import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  isSaving: false,
  isSaved: false,
  selectedOffice: null,
  selectedProsecutors: Ember.computed('initialSelectedProsecutor', function() {
    if (this.get('initialSelectedProsecutor')) {
      let prosecutor = this.get('prosecutors').find((prosecutor) => {
        return prosecutor.name.value === this.get('initialSelectedProsecutor');
      });

      return [prosecutor];
    } else {
      return Ember.A();
    }
  }),

  didInsertElement() {
    let modal = this.$('.modal');

    modal.modal({
      backdrop: false
    });

    modal.on('hidden.bs.modal', () => {
      this.sendAction('close');
    });
  },

  validate() {
    let errors = Ember.A();
    this.set('errors', errors);

    if (!this.get('selectedOffice')) {
      errors.pushObject(this.get('i18n').t('components.prosecutors.refine.refinement-form.errors.office_is_required'));
    }

    if (this.get('selectedProsecutors.length') <= 0) {
      errors.pushObject(this.get('i18n').t('components.prosecutors.refine.refinement-form.errors.prosecutors_are_required'));
    }

    if (!this.get('name')) {
      errors.pushObject(this.get('i18n').t('components.prosecutors.refine.refinement-form.errors.name_is_required'));
    }

    if (!this.get('email')) {
      errors.pushObject(this.get('i18n').t('components.prosecutors.refine.refinement-form.errors.email_is_required'));
    }

    let emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.get('email') && !emailRegexp.test(this.get('email'))) {
      errors.pushObject(this.get('i18n').t('components.prosecutors.refine.refinement-form.errors.email_is_invalid'));
    }

    return errors.length > 0 ? false : true;
  },

  actions: {
    save() {
      this.set('isSaving', true);

      if (this.validate()) {
        let promise = new Ember.RSVP.Promise((resolve, reject) => {
          $.ajax({
            url: 'https://api.otvorenesudy.sk/public/prosecutor_refinements.json',
            method: 'POST',
            data: {
              name: this.get('name'),
              email: this.get('email'),
              prosecutors: this.get('selectedProsecutors').mapBy('name.value'),
              office: this.get('selectedOffice')
            }
          }).then(resolve, reject);
        });

        promise.then(() => {
          this.set('isSaved', true);
        }).catch(() => {
          this.notifications.error(this.get('i18n').t('components.prosecutors.refine.refinement-form.errors.server_error'), {
            autoClear: true
          });
        }).finally(() => {
          this.set('isSaving', false);
        });
      } else {
        this.get('errors').forEach((message) => {
          this.notifications.error(message, {
            autoClear: true
          });
        });

        this.set('isSaving', false);
      }
    }
  }
});
