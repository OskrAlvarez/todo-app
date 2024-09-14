import { useTodoStore } from "../store/TodoStore";
import { ButtonsContainer, TodoFooterStyled } from "./styled/TodoFooterStyled";

const filters = [
  {
    id: 1,
    value: 'all',
  },
  {
    id: 2,
    value: 'active'
  },
  {
    id: 3,
    value: 'completed'
  }
]

export function TodoFooter({ activeCount }) {
  const { clearCompleted, filterTodos, filter: filterStored } = useTodoStore(state => state)

  const onHandleComplete = () => {
    clearCompleted()
  }

  const onHandleFilter = (filter) => {
    filterTodos(filter)
  }
  return (
    <TodoFooterStyled>
      <div>
        <span>{ activeCount } items left</span>
      </div>
      <ButtonsContainer>
        <div className="mobile-menu">
          {
            filters.map(filter => (
              <button 
                className={`
                  ${filterStored === filter.value 
                    ? 'active' 
                    : ''}
                `} 
                onClick={(e) => onHandleFilter(e.target.value)} 
                key={filter.id} 
                value={filter.value}
              >
                {filter.value}
              </button>
            ))
          }
        </div>
      </ButtonsContainer>
      <ButtonsContainer>
        <button onClick={onHandleComplete}>Clear Completed</button>
      </ButtonsContainer>
    </TodoFooterStyled>
  )
}
