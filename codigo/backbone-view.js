var PersonView = Backbone.View.extends({
  model: Person,

  template: _.template(/* Plantilla */),

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  events: {
    'click .delete-button': 'delete'
  },

  delete: function() {
    this.model.destroy();
  }
});
