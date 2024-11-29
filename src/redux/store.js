import { configureStore } from "@reduxjs/toolkit";
//------------------------------------
// // 1. Оголошуєм початкове значення стану Redux
// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//   },
//   filters: {
//     status: "all",
//   },
// };

// 2. Передаємо початкове значення стану Redux
// Поки що використовуємо редюсер який
// тільки повертає отриманий стан Redux
// const rootReducer = (state = initialState, action) => {
//   // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
//     // Залежно від типу екшену виконуватиметься різна логіка
//     // Кожен редюсер отримує всі екшени, відправлені в стор.
//     case "tasks/addTask": {
//       // Потрібно повернути копію об'єкту поточного стану
//       // в якому є всі дані існуючого стану
//       return {
//         // Оновлення стану з новими даними
//         ...state,
//         tasks: {
//           // та новий масив задач в якому є всі існуючі завдання
//           // та об'єкт нового завдання
//           items: [...state.tasks.items, action.payload],
//         },
//       };
//     }
//     case "tasks/deleteTask":
//       return {
//         ...state,
//         tasks: {
//           items: state.tasks.items.filter((task) => task.id !== action.payload),
//         },
//       };

//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         tasks: {
//           items: state.tasks.items.map((task) => {
//             if (task.id !== action.payload) {
//               return task;
//             }
//             return { ...task, completed: !task.completed };
//           }),
//         },
//       };

//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         filters: {
//           status: action.payload,
//         },
//       };

//     // Якщо редюсер не повинен обробляти якийсь тип екшену,
//     // необхідно повернути наявний стан без змін.
//     default:
//       return state;
//   }
// };
//-------------------------------------------------------------

// Відповідає лише за оновлення властивості tasks
// Значенням параметра state буде об'єкт завдань
// const tasksReducer = (state = initialState.tasks, action) => {
//   switch (action.type) {
//     case "tasks/addTask": {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }

//     case "tasks/deleteTask":
//       return {
//         ...state,
//         items: state.items.filter((task) => task.id !== action.payload),
//       };

//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         items: state.items.map((task) => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };

//     default:
//       return state;
//   }
// };

// Відповідає лише за оновлення властивості filters
// Значенням параметра state буде об'єкт фільтрів
// const filtersReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// };
//-------------------------------------------------------------
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  // Підключаємо редюсери до стору
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
