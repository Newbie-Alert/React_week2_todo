import React from "react";
import styled from "styled-components";

// Header Container
const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: #1f1f1f;
  color: white;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h3>TodoList</h3>
      <h3>React_week2</h3>
    </HeaderContainer>
  );
}
