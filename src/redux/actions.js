// Фабрика екшенів шаблонний код
export const addTask = (newTask) => {
  return {
    type: "tasks/addTask",
    payload: newTask,
  };
};

// export const deleteTask = (taskId) => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleCompleted = (taskId) => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

// export const setStatusFilter = (value) => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };

// createAction з бібліотеки Redux Toolkit спрощує шаблонний код
// 1. Імпортуємо функцію createAction
import { createAction } from "@reduxjs/toolkit";

// 2. Створюємо фабрики екшенів
// export const addTask = createAction("tasks/addTask");
export const deleteTask = createAction("tasks/deleteTask");
export const toggleCompleted = createAction("tasks/toggleCompleted");
export const setStatusFilter = createAction("filters/setStatusFilter");
