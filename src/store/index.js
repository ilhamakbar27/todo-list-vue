import { createStore } from 'vuex';

export default createStore({
  state: {
    notes: [],
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    addNote(state, note) {
      state.notes.push(note);
    },
    removeNote(state, index) {
      state.notes.splice(index, 1);
    },
  },
  actions: {
    setNotes({ commit }, notes) {
      commit('setNotes', notes);
    },
    addNote({ commit }, note) {
      commit('addNote', note);
    },
    removeNote({ commit }, index) {
      commit('removeNote', index);
    },
  },
  getters: {
    notes: (state) => state.notes,
  },
});