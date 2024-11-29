// import { createAction } from "@reduxjs/toolkit";

// // Перенесли екшени пов'язані із завданнями у файл слайса
// export const setStatusFilter = createAction("filters/setStatusFilter");

// // Початковий стан слайса
// const initialState = {
//   status: "all",
// };

// // Експортуємо редюсер слайса
// export default function filtersReducer(state = initialState, action) {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// }
//------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

// Експортуємо фабрики екшенів
export const { setStatusFilter } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
