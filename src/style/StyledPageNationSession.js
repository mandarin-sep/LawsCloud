import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 50px 16px 16px 16px;
`;

export const Button = styled.button`
  width: 40px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  // background: black;
  color: black;
  font-size: 1rem;

  &:hover {
    background: #ddf584;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #81c147;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
