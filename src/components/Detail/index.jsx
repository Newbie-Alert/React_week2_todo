import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { setSelected } from "../../redux/modules/selected";
import { openState } from "../../redux/modules/modal";
import { changeStatus } from "../../redux/modules/todo";
import Modal from "../Modal";

// STYLED-COMPONENT
const DetailContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
`;

const DetailBox = styled.div`
  width: 980px;
  margin: auto;
  border: 1px solid #1f1f1f;
`;

const DetailTitle = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #1f1f1f;
  color: white;
`;

const DetailContent = styled.div`
  width: 100%;
  padding: 1rem;
`;

const DetailText = styled.div`
  width: 100%;
  height: 400px;
  padding: 1rem;
  border-top: 1px solid #1f1f1f;
`;

const DetailFooter = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  background-color: #1f1f1f;
`;

const DetailBtn = styled.button.attrs((props) => ({
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
export default function Detail() {
  // HOOK
  const urlParmeter = useParams();
  const navi = useNavigate();

  // REDUX STATE
  const data = useSelector((state) => state.todos).find(
    (el) => el.id === urlParmeter.id
  );

  // DISPATCH
  const dispatch = useDispatch();

  // FUNCTIONS

  // 모달창이 열린 게시물의 ID를 저장
  const setModalId = (e) => {
    dispatch(setSelected(e.target.id));
  };

  // 모달 오픈
  const openModal = () => {
    dispatch(openState());
  };

  // 완료 || 취소 버튼이 눌린 게시물의 isDone 상태 변경
  const statusToggle = (e) => {
    dispatch(changeStatus(e.target.id));
  };

  return (
    <DetailContainer>
      <DetailBox>
        <DetailTitle>
          <h3>{data.title}</h3>
        </DetailTitle>
        <DetailContent>등록일시: {data.createdAt.slice(0, 25)}</DetailContent>
        <DetailText>{data.text}</DetailText>
        <DetailFooter>
          <DetailBtn
            onClick={(e) => {
              setModalId(e);
              openModal();
            }}
            role={"delete"}
            id={data.id}>
            삭제
          </DetailBtn>
          <DetailBtn
            onClick={(e) => {
              statusToggle(e);
              navi("/");
            }}
            role={"complete"}
            id={data.id}>
            {data.isDone === false ? "완료" : "취소"}
          </DetailBtn>
        </DetailFooter>
      </DetailBox>
      <Modal />
    </DetailContainer>
  );
}
