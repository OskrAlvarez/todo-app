import { useTodoStore } from "../store/TodoStore";

export function useFilters() {
  const { todos, filter } = useTodoStore((state) => state);
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return todos;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    if (filter === "active") {
      return !todo.completed;
    }
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return {
    filteredTodos,
    activeCount
  }
}