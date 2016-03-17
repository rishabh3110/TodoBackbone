app.TodoView = Backbone.View.extend ({
    tagname: 'li',
    template: _.template($('#todo-template').html()),
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click .toggle': 'taskStatus'
    },
    taskStatus: function() {
        this.model.completed = !this.model.completed;
        this.model.save({completed: this.model.completed});
        if (this.model.get("completed")) {
            this.$el.find('.view').addClass('checked');
        } else {
            this.$el.find('.view').removeClass('checked');
        }
    }
});

app.todoView = new app.TodoView();