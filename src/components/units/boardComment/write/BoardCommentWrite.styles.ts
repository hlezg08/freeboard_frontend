import styled from "@emotion/styled";
export const Icon = styled.img``;

export const Hr = styled.hr`
  width: 100%;
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;
export const CommentNotMemberWrapper = styled.div`
  padding-bottom: 20px;
`;
export const CommentNotMemberInput = styled.input`
  width: 150px;
  height: 45px;
  font-size: 16px;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid lightgray;
`;
export const CommentTextarea = styled.textarea`
  height: 100px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid lightgray;
`;
export const CommentAttach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
export const CommentButton = styled.button`
  width: 70px;
  height: 45px;
  font-size: 16px;
  background-color: #f9f9f9;
  :hover {
    cursor: pointer;
  }
  border-radius: 5px;
  border: none;
`;
