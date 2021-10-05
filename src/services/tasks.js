import api from "./api";

class TaskService {
  static async getTasks() {
    const response = await api.get("/tasks");

    return response.data;
  }

  static async saveTask(task) {
    const response = await api.post("/tasks", task);

    return response.data;
  }

  static async deleteTask(id) {
    const response = await api.delete("/tasks/" + id);

    return response.data;
  }
}

export default TaskService;
