import styled from "@emotion/styled";
export const Icon = styled.img``;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid black;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const CommentWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
`;
export const CommentNotMemberWrapper = styled.div`
  padding-bottom: 20px;
`;
export const CommentNotMemberInput = styled.input`
  width: 150px;
  height: 40px;
  font-size: 16px;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid lightgray;
`;
export const CommentTextarea = styled.textarea`
  min-height: 100px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid lightgray;
`;
export const CommentAttach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;
export const CommentButton = styled.button`
  width: 70px;
  height: 40px;
  font-size: 16px;
  background-color: #f9f9f9;
  :hover {
    cursor: pointer;
  }
  border-radius: 5px;
  border: none;
`;
