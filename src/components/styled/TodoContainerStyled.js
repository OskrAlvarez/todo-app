import styled from "styled-components";

export const TodoContainerStyled = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  margin-top: -100px;
  width: 100%;
  margin-bottom: 100px;
  border-radius: 6px;
  background-color: var(--bgContainer);

  & h2 {
    text-align: center;
    padding: 30px;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: -50px;
    width: 95%;
  }

`