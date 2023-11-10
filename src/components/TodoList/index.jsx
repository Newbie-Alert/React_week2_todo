import React from "react";
import TodoCard from "../TodoCard";
import styled from "styled-components";

// STYLED-COMPONENTS
const TodoContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const Category = styled.div`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1rem 1.5rem;
`;

// MAIN COMPONENT
export default function TodoList({ isActive }) {
  return (
    <TodoContainer>
      <Category>{isActive ? <h2>할 일 목록</h2> : <h2>완료 목록</h2>}</Category>
      <TodoCard isActive={isActive} />
    </TodoContainer>
  );
}
