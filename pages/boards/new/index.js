import {
  App,
  Title,
  Wrapper,
  Text,
  TextLarge,
  Label,
  UserInfo,
  Group,
  PostCode,
  PostCodeGroup,
  SearchBtn,
  PhotoGroup,
  Photo,
  RadioGroup,
  RadioInput,
  RadioLabel,
  SubmitGroup,
  SubmitBtn,
} from "../../../styles/emotion";

export default function MyApp() {
  return (
    <App>
      <Title>게시물 등록</Title>
      <Wrapper>
        <UserInfo>
          <Group>
            <Label>작성자</Label>
            <Text type="text" placeholder="이름을 적어주세요." />
          </Group>
          <Group>
            <Label>비밀번호</Label>
            <Text type="password" placeholder="비밀번호를 입력해주세요." />
          </Group>
        </UserInfo>

        <Group>
          <Label>제목</Label>
          <Text type="text" placeholder="제목을 작성해주세요." />
        </Group>
        <Group>
          <Label>내용</Label>
          <TextLarge type="text" placeholder="내용을 작성해주세요." />
        </Group>

        <Group>
          <Label>주소</Label>
          <PostCodeGroup>
            <PostCode type="text" placeholder="07250" />
            <SearchBtn>우편번호 검색</SearchBtn>
          </PostCodeGroup>
          <Text type="text" />
          <Text type="text" />
        </Group>

        <Group>
          <Label>유튜브</Label>
          <Text type="text" placeholder="링크를 복사해주세요." />
        </Group>
        <Group>
          <Label>사진 첨부</Label>
          <PhotoGroup>
            <Photo>Upload</Photo>
            <Photo>Upload</Photo>
            <Photo>Upload</Photo>
          </PhotoGroup>
        </Group>
        <Group>
          <Label>메인 설정</Label>
          <RadioGroup>
            <RadioInput type="radio" id="youtube" name="main-radio" />
            <RadioLabel for="youtube">유튜브</RadioLabel>
            <RadioInput type="radio" id="photo" name="main-radio" />
            <RadioLabel for="photo">사진</RadioLabel>
          </RadioGroup>
        </Group>
        <SubmitGroup>
          <SubmitBtn>등록하기</SubmitBtn>
        </SubmitGroup>
      </Wrapper>
    </App>
  );
}
