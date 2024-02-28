<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-semibold mb-8">Todo List</h1>
    <div class="flex flex-col items-center mb-4">
      <input
        v-model="newNote.title"
        class="w-full border border-gray-300 rounded py-2 px-4 mb-2"
        placeholder="Add a new todos title" />
      <textarea
        v-model="newNote.content"
        class="w-full border border-gray-300 rounded py-2 px-4 mb-2"
        placeholder="Add a new todos content" />
      <button
        @click="addNewNote"
        class="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-bold py-2 px-20 rounded">
        Add
      </button>
    </div>
    <div class="list-disc pl-8">
      <Card
        v-for="(note, index) in notes"
        :key="index"
        :note="note"
        :index="index"
        @remove="removeNote"
        @edit="editNote" />
      <p
        class="text-center pt-24 font-semibold text-gray-500 text-3xl"
        v-if="notes.length === 0">
        Note list is empty. Add a note here.
      </p>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Card,
  },
  data() {
    return {
      newNote: {
        title: "",
        content: "",
        date: new Date(),
      },
      editingIndex: -1,
      error: null,
    };
  },
  computed: {
    ...mapGetters(["notes"]),
  },
  methods: {
    ...mapActions(["addNote", "removeNote"]),
    addNewNote() {
      try {
        if (
          this.newNote.title.trim() === "" ||
          this.newNote.content.trim() === ""
        ) {
          throw new Error("Note title and content cannot be empty");
        }

        if (this.editingIndex !== -1) {
          this.notes[this.editingIndex] = this.newNote;
          this.editingIndex = -1;
        } else {
          this.addNote(this.newNote);
        }

        this.newNote = {
          title: "",
          content: "",
          date: new Date(),
        };
      } catch (error) {
        this.error = error.message;
      }
    },
    removeNoteItem(index) {
      this.removeNote(index);
    },
    editNote(index) {
      this.editingIndex = index;
      this.newNote = this.notes[index];
    },
  },
};
</script>
