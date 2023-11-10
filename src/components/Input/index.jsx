import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/modules/todo";
import uuid from "react-uuid";
import styled from "styled-components";

// STYLED-COMPONENTS
const InputContainer = styled.form`
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid black;
`;

const InputBtn = styled.button.attrs({ type: "submit" })`
  &:hover {
    background-color: #1f1f1f;
    color: white;
  }
`;

const InputEl = styled.input.attrs((props) => ({
  required: true,
  placeholder: "내용을 입력하세요",
  value: props.$id === "title" ? props.$title : props.$text,
}))`
  padding: 0.36rem 0.3rem;
  border-radius: 5px;
  border: 1px solid #161616;
`;

// MAIN COMPONENT
export default function Input() {
  // STATE
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  // DISPATCH
  const dispatch = useDispatch();

  // FUNCTION
  // text state 변경
  const handleText = (e) => {
    setText(e.target.value);
  };

  // title state 변경
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // 할 일을 todo state에 등록
  const handleSubmit = (e, text, title) => {
    e.preventDefault();
    let task = {
      id: uuid(),
      text,
      title,
      isDone: false,
      createdAt: new Date().toString(),
    };
    dispatch(addTask(task));
    setText("");
    setTitle("");
  };

  return (
    <InputContainer onSubmit={(e) => handleSubmit(e, text, title)}>
      <div>
        제목: &nbsp;
        <InputEl onChange={handleTitle} $title={title} $id="title" />
      </div>
      <div>
        내용: &nbsp;
        <InputEl onChange={handleText} $text={text} $id="text" />
      </div>

      <InputBtn>등록하기</InputBtn>
    </InputContainer>
  );
}
