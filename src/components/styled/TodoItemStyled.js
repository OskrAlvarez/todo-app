import styled from "styled-components";

export const TodoItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid var(--bgBorder);
  color: var(--TodoFontColor);
 
  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  & div.check {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid var(--bgBorder);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      border: 1px solid #09f;
    }
  }

  & div.completed {
    background: linear-gradient(to right bottom, #57ddff, #c058f3);
    border: 1px solid #fafafa;
    
  }

  & p.completed {

    color: var(--TodoFontColor);
    text-decoration: line-through;
  }

  & button {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--buttonColor);
    cursor: pointer;
    display: none;
  }

  &:hover button {
    display: block;
  }
`