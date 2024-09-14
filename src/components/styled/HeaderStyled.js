import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: relative;
  padding: 20px 15px;
  min-height: 300px;
  background-image: var(--imageHeaderDesk);
  background-repeat: no-repeat;
  background-size: cover;

  & h1 {
    color: #fafafa;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    width: 40%;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 200px;
    background-image: var(--imageHeaderMobile);
  }
  & div {
    width: 100%;
  }
`