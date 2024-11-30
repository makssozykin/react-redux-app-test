import axios from "axios";
// import { fetchInProgress, fetchSuccess, fetchError } from "./tasksSlice";

// Встановлюємо базову URL-адресу
// для всіх запитів axios
axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// Оголошення асинхронної операції
// fetchTasks для отримання даних
// export const fetchTasks = () => async (dispatch) => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchInProgress());
//     // Виконуємо GET-запит до "/tasks"
//     // для отримання списку завдань
//     const response = await axios.get("/tasks");
//     // Обробка даних
//     dispatch(fetchSuccess(response.data));
//     // Тут буде код для обробки відповіді,
//     // наприклад, dispatch отриманих даних
//   } catch (error) {
//     // У випадку помилки ми можемо обробити її тут
//     // Обробка помилки
//     dispatch(fetchError(error.message));
//   }
// };
//-----------------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
