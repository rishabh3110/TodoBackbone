var app = {};

app.ToDo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});