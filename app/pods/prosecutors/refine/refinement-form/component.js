import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  isSaving: false,
  isSaved: false,
  selectedOffice: null,
  selectedProsecutors: Ember.computed(function() {
    return Ember.A();
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

  valid() {
    let errors = Ember.A();
    this.set('errors', errors);

    if (!this.get('selectedOffice')) {
      errors.pushObject(this.get('i18n').t('components.prosecutors.refine.refinement-form.errors.office_is_required'));
    }

    if (this.get('selectedProsecutors.length') <= 0) {
      errors.pushObject(this.get('i18n').t('components.prosecutors.refine.refinement-form.errors.prosecutors_are_required'));
    }

    return errors.length > 0 ? false : true;
  },

  actions: {
    save() {
      this.set('isSaving', true);

      if (this.valid()) {
        setTimeout(() => {
          this.set('isSaving', false);
          this.set('isSaved', true);
        }, 1500);
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
