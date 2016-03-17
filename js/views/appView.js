app.AppView = Backbone.View.extend ({
    el: $('.container'),
    initialize: function() {
        this.input = this.$('#new-todo');
        app.todoList.on('add reset remove',this.render, this);
        app.todoList.fetch();
    },
    events: {
        'keypress #new-todo' : 'createTaskOnEnter',
        'click .save-btn' : 'createTask',
        'click .remove-btn': 'destroyTasks'
    },
    destroyTasks: function () {
        _.each(_.clone(app.todoList.models), function(model) {
            if(model.get('completed')) {
                model.destroy();
            }
        });
    },
    createTaskOnEnter: function (e) {
        if(e.which === 13 ) {
            this.createTask();
        }
    },
    createTask : function () {
        if(!this.input.val().trim()){
            return;
        }
        app.todoList.create(this.newAttribute());
        this.input.val('');
    },
    render: function(){
        this.$('.todo-list').html('');
        app.todoList.each(this.addOne, this);
    },
    addOne: function(todo){
        var view = new app.TodoView({model : todo});
        $('.todo-list').append(view.render().el);
    },
    newAttribute: function(){
        return {
            title : this.input.val().trim(),
            completed: false
        }
    }
});
app.appView = new app.AppView();