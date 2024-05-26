'use strict';

(function () {
  const todoList = {
    TODO_ITEMS: 'list-items',
    form: document.querySelector('#todoForm'),
    formInputs: document.querySelectorAll(
      '#todoForm input, #todoForm textarea',
    ),
    tasksWrapper: document.querySelector('#todoItems'),
    removeAllBtn: document.querySelector('[data-remove-all]'),
    taskId: 1,

    createTaskItem(event) {
      event.preventDefault();
      event.stopPropagation();

      const data = {
        title: null,
        description: null,
      };

      this.formInputs.forEach((input) => {
        data[input.name] = input.value;
      });

      try {
        const savedItem = this.addTask(data);
        const todoItemHTML = this.createTodoItemLayout(savedItem);
        this.tasksWrapper.prepend(todoItemHTML);
      } catch (error) {
        console.warn(error.message);
      } finally {
        event.target.reset();
      }
    },

    getListData() {
      const data = JSON.parse(localStorage.getItem(this.TODO_ITEMS));
      return data ? data : [];
    },

    addTask(data) {
      const dataToSave = structuredClone(data);
      const savedData = this.getListData();
      dataToSave.id = this.taskId;
      this.taskId++;
      savedData.push(dataToSave);
      localStorage.setItem(this.TODO_ITEMS, JSON.stringify(savedData));

      const dataFromLS = this.getListData();
      return dataFromLS[dataFromLS.length - 1];
    },

    createTodoItemLayout: (data) => {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('data-todo-id', data.id);

      wrapper.innerHTML = `<div class="taskWrapper">
                                    <div class="title">${data.title | data.id}</div>
                                    <div class="description">${data.description}</div>
                                    <hr>
                                    <button class="btn btn-danger btn-sm" data-remove-btn>Remove</button>
                                </div>`;
      return wrapper;
    },

    loadedHandler() {
      const todoItems = this.getListData();
      if (!todoItems.length) return;

      this.taskId = todoItems[todoItems.length - 1].id + 1;

      todoItems.forEach((item) => {
        const layout = this.createTodoItemLayout(item);
        this.tasksWrapper.prepend(layout);
      });
    },

    handleRemoveTodo(event) {
      event.stopPropagation();
      if (!event.target.hasAttribute('data-remove-btn')) return;

      const currentWrapper = event.target.closest('[data-todo-id]');
      const todoId = Number(currentWrapper.getAttribute('data-todo-id'));

      const savedData = this.getListData();
      const dataToSave = savedData.filter((item) => {
        return item.id !== todoId;
      });

      localStorage.setItem(this.TODO_ITEMS, JSON.stringify(dataToSave));
      currentWrapper.remove();
    },

    handleRemoveAllTodos() {
      localStorage.removeItem(this.TODO_ITEMS);
      tasksWrapper.innerHTML = '';
    },

    init() {
      this.createTaskItem = this.createTaskItem.bind(this);
      this.loadedHandler = this.loadedHandler.bind(this);
      this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
      this.handleRemoveAllTodos = this.handleRemoveAllTodos.bind(this);

      this.form.addEventListener('submit', this.createTaskItem);
      document.addEventListener('DOMContentLoaded', this.loadedHandler);
      this.tasksWrapper.addEventListener('click', this.handleRemoveTodo);
      this.removeAllBtn.addEventListener('click', this.handleRemoveAllTodos);
    },
  };

  todoList.init();
})();
