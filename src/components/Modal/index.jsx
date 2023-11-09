import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeState } from "../../redux/modules/modal";
import { deleteTask } from "../../redux/modules/todo";

// STYLED-COMPONENTS
const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
  opacity: 0.3;
`;

const ModalBox = styled.div`
  width: 350px;
  background-color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 5px;
  text-align: center;
  padding: 1rem 3rem;
`;

const MobalBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const ModalBtn = styled.button`
  /* props에 따라 버튼 hover 시 배경색이 달라지게 */
  &:hover {
    background-color: ${(props) =>
      props.role === "delete" ? "#f76363" : "#20B2AA"};
    color: white;
  }
`;

// MAIN COMPONENT
export default function Modal() {
  // REDUX STATE
  const modalState = useSelector((state) => state.modalSwitch);
  const selected = useSelector((state) => state.selected);

  // DISPATCH
  const dispatch = useDispatch();

  // FUNCTION
  const closeModal = () => {
    dispatch(closeState());
  };

  const removeTask = () => {
    dispatch(deleteTask(selected));
    closeModal();
  };

  if (modalState === false) return null;
  else {
    return (
      <ModalContainer>
        <ModalBox>
          <h3>항목을 삭제하시겠습니까?</h3>
          <MobalBtnBox>
            <ModalBtn onClick={removeTask}>삭제</ModalBtn>
            <ModalBtn onClick={closeModal}>취소</ModalBtn>
          </MobalBtnBox>
        </ModalBox>
        <ModalBg />
      </ModalContainer>
    );
  }
}
