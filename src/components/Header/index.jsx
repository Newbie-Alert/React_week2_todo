import React from "react";
import { useNavigate } from "react-router-dom";
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

// MAIN COMPONENT
export default function Header() {
  // HOOK
  const navi = useNavigate();

  return (
    <HeaderContainer>
      <h3 onClick={() => navi("/")}>TodoList</h3>
      <h3>React_week2</h3>
    </HeaderContainer>
  );
}
