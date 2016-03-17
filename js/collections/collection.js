app.TodoList = Backbone.Collection.extend ({
    model: app.ToDo,
    localStorage: new Store("backbone-todo")
});

app.todoList = new app.TodoList();