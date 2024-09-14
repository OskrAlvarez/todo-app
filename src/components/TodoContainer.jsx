import { useFilters } from "../hooks/useFilters";
import { TodoList, TodoFooter } from "./";
import { TodoContainerStyled } from "./styled/TodoContainerStyled";

export function TodoContainer() {
  const { activeCount, filteredTodos } = useFilters()  

  return (
    <TodoContainerStyled>
      {
        filteredTodos.length > 0 
          ? <TodoList filteredTodos={filteredTodos} />          
          : <h2>No hay Tareas que mostrar...</h2> 
      }
      <TodoFooter activeCount={activeCount} />
    </TodoContainerStyled>
  );
}
