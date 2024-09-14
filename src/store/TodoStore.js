import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = [
  { id: 1, title: "Complete online Javascript course", completed: true },
  { id: 2, title: "Jog around the park 3x", completed: false },
  { id: 3, title: "10 minutes of meditation", completed: false },
  { id: 4, title: "Read for 1 hour", completed: false },
  { id: 5, title: "Pick up Groceries", completed: false },
  { id: 6, title: "Complete todo app on frontend mentor", completed: false },
];
export const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: initialState,
      filter: "all",
      createTodo: (title) => {
        const { todos } = get();
        const newItem = {
          id: crypto.randomUUID(),
          title,
          completed: false,
        };
        const temp = todos.unshift(newItem);
        set({ ...todos, ...temp });
      },
      deleteTodo: (id) => {
        const { todos } = get();
        const temp = todos.filter((todo) => todo.id !== id);
        set({ todos: temp });
      },
      toggleCompleted: (id) => {
        const { todos } = get();
        const findItem = todos.find((item) => item.id === id);
        findItem.completed = !findItem.completed;
        set({ ...todos, completed: findItem.completed });
      },
      clearCompleted: () => {
        const { todos } = get();
        const filteredCompleted = todos.filter((item) => !item.completed);
        set({ todos: filteredCompleted });
      },
      filterTodos: (filter) => {
        return set({ filter });
      },
    }),
    { name: "stored-todos" }
  )
);
