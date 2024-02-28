import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1);
    },
  },
  actions: {
    setTodos({ commit }, todos) {
      commit('setTodos', todos);
    },
    addTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
    removeTodo({ commit }, index) {
      commit('removeTodo', index);
    },
  },
  getters: {
    todos: (state) => state.todos,
  },
});