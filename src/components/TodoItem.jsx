import { toast } from "sonner";

import { useTodoStore } from "../store/TodoStore";
import { CheckedTodoIcon, CloseIcon } from "./Icons";
import { TodoItemStyled } from "./styled/TodoItemStyled";

export function TodoItem({ todo }) {
  const className = todo.completed ? "completed" : "";
  const { toggleCompleted, deleteTodo } = useTodoStore((state) => state);
  const onHandleComplete = (id) => {
    toggleCompleted(id);
  };

  const onDeleteTodo = (id) => {
    deleteTodo(id);
    toast.info("Tarea Eliminada Existosamente!");
  };

  return (
    <TodoItemStyled>
      <div>
        <div
          onClick={() => onHandleComplete(todo.id)}
          className={`${className} check`}
        >
          {todo.completed ? <CheckedTodoIcon /> : ""}
        </div>
        <div>
          <p className={`${className}`}>{todo.title}</p>
        </div>
      </div>
      <button type="button" onClick={() => onDeleteTodo(todo.id)}>
        <CloseIcon />
      </button>
    </TodoItemStyled>
  );
}
