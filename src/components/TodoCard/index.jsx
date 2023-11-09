import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeStatus } from "../../redux/modules/todo";
import { openState } from "../../redux/modules/modal";
import { setSelected } from "../../redux/modules/selected";
import { useNavigate } from "react-router-dom";

// STYLED-COMPONENTS
const ListContainer = styled.div`
  width: 100%;
  height: 230px;
  overflow-y: scroll;
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #d4d4d4;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const ItemBtn = styled.button.attrs((props) => ({
  "data-id": props.id,
}))`
  /* props에 따라 버튼 hover 시 배경색이 달라지게 */
  &:hover {
    background-color: ${(props) =>
      props.role === "delete" ? "#f76363" : "#20B2AA"};
    color: white;
  }
`;

// MAIN COMPONENT
export default function TodoCard({ isActive }) {
  // useNavigator
  const navi = useNavigate();

  // Redux_STATE
  const todos = useSelector((state) => state.todos);
  // 할 일 상태(진행 중 / 완료)에 따라 filter한 list
  let filtered = isActive
    ? todos?.filter((el) => el.isDone === false)
    : todos?.filter((el) => el.isDone === true);

  // REDUX DISPATCH
  const dispatch = useDispatch();

  // FUNCTION
  const statusToggle = (e) => {
    dispatch(changeStatus(e.target.id));
  };

  const setModalId = (e) => {
    dispatch(setSelected(e.target.id));
  };

  const openModal = () => {
    dispatch(openState());
  };

  return (
    <>
      <ListContainer>
        {isActive === true && filtered.length === 0 && <h1>할 일 완료!</h1>}
        {isActive === false && filtered.length === 0 && (
          <h1>완료 항목이 없습니다</h1>
        )}

        {filtered?.map((el) => {
          return (
            <TodoItem key={el.id}>
              <div>
                <h3 onClick={() => navi(`/detail/${el.id}`)}>{el.title}</h3>
                <p>{el.text}</p>
              </div>
              <ButtonBox>
                <ItemBtn
                  onClick={(e) => {
                    setModalId(e);
                    openModal();
                  }}
                  role={"delete"}
                  id={el.id}>
                  삭제
                </ItemBtn>
                <ItemBtn onClick={statusToggle} role={"complete"} id={el.id}>
                  {el.isDone === false ? "완료" : "취소"}
                </ItemBtn>
              </ButtonBox>
            </TodoItem>
          );
        })}
      </ListContainer>
    </>
  );
}
