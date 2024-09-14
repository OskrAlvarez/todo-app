import styled from "styled-components";

export const TodoFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: var(--placeHolderColor);

  & div > span {
    font-size: 1rem;
  }
`;

export const ButtonsContainer = styled.nav`
  display: flex;
  gap: 0.85rem;

  & button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: var(--placeHolderColor);
    font-weight: bold;
    font-size: 1.05rem;

    &:hover {
      color: var(--veryDarkGrayishBlue);
    }
  }

  .active {
    color: #3a7bfd;
    font-weight: bold;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    .mobile-menu {
      position: absolute;
      bottom: -80px;
      right: 0px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--bgContainer);
      padding: 20px;
      border-radius: 6px;

      & button {
        font-size: 1.15rem;
        text-transform: capitalize;
      }
    }
  }
`;
