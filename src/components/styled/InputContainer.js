import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 670px;
  margin: 0 auto;
  position: relative;

  .circle {
    position: absolute;
    top: -5px;
    left: 8px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid var(--bgBorder);
  }
  & input {
    display: block;
    width: 100%;
    margin-top: -20px;
    margin-bottom: 50px;
    padding: 20px 40px 20px;
    border-radius: 6px;
    outline: none;
    border: none;
    background-color: var(--bgContainer);
    caret-color: #09f;
    font-size: 1.1rem;
    color: var(--bgFont);

    &::placeholder {
      color: var(--placeHolderColor);
    }
  }

  & button {
    display: none;
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--bgFont);
    cursor: pointer;
    padding: 5px;
    top: -10px;
    right: 10px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    & button {
      display: block;
    }
  }
`;
