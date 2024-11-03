import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from '../../interfaces';

interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Omit<ITodo, 'id'>>) => {
      const newTodo: ITodo = {
        id: Date.now().toString(),
        text: payload.text,
        description: payload.description,
        category: payload.category,
        dueDate: payload.dueDate,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, { payload }: PayloadAction<string>) => {
      const remainingTodos = state.todos.filter((todo) => todo.id !== payload);
      state.todos = remainingTodos;
    },
    toggleTodo: (state, { payload }: PayloadAction<string>) => {
      // TODO Toggle the completion of the todo
      // Hint: Look at the remove, it is similar
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
