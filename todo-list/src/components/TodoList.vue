<template>
  <div class="container" style="max-width: 600px">
    <h2 class="text-center mt-5">My Todo List</h2>
    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task..."
        class="w-100"
        style="
          background-color: #gray;
          color: #000;
          padding: 8px;
          border-radius: 5px;
        "
      />
      <button
        class="hover:bg-gray-600 text-black px-4 py-2 rounded disabled:bg-gray-400"
        @click="submitTask"
      >
        SUBMIT
      </button>
    </div>
    <!-- Table-->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col" style="width: 120px">Status</th>
          <th scope="col" class="text-center">Delete</th>
          <th scope="col" class="text-center">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span
              :class="{ 'line-through': task.status === 'finished' }"
              :style="{
                'text-decoration':
                  task.status === 'finished' ? 'line-through' : 'none',
              }"
            >
              {{ task.name }}
            </span>
          </td>
          <td>
            <span
              class="pointer noselect"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-success': task.status === 'finished',
                'text-warning': task.status === 'in-progress',
              }"
            >
              {{ capitalizeFirstChar(task.status) }}
            </span>
          </td>
          <td class="text-center">
            <div @click="deleteTask(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
          </td>

          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    msg: String,
  },
  data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["to-do", "in-progress", "finished"],
      tasks: [],
    };
  },
  methods: {
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    submitTask() {
      if (this.task.length === 0) return;
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        this.tasks.push({
          name: this.task,
          status: "to-do",
        });
      }
      this.task = "";
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.noselect {
  -webkit-touch-callout: none;
}
</style>
