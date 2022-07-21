import {
  Content,
  List,
  List_Wrapper,
  ScrollBox,
  SubTitle,
  Title,
  Wrapper,
  Year,
} from "../../../src/components/units/Career.styles";
import { Document, Page, pdfjs } from "react-pdf";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Slide from "react-reveal/Slide";
import { prefix } from "../../../config/config";

export default function CareerPage() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${prefix}/images/rending/rending1.jpg)`,
      }}
    >
      <Fade>
        <ScrollBox>
          <Title>Career & Education</Title>
          <Year>2022 ~</Year>
          <SubTitle>code.camp FE 06 (2022.03.14 ~ 2022.06.03)</SubTitle>
          <Content>
            Software Engineering Bootcamp, 120% Front-end Program 06th
          </Content>
          <br />
          <Slide right>
            <Document file={`${prefix}/files/codeCamp.pdf`}>
              <Page height={400} pageNumber={1} />
            </Document>
          </Slide>
          <br />
          <List_Wrapper>
            <List>React Hooks 기반 프론트엔드 과정 학습</List>
            <List>
              상시 페어 프로그래밍, 코드 리뷰, 알고리즘 토이 과제 해결, 일일
              과제 해결
            </List>
            <List>개인 프로젝트 2회 진행</List>
            <List>팀 프로젝트 1회 진행</List>
          </List_Wrapper>
          <br />
          <Year>~ 2022</Year>
          <SubTitle>유한대학교 전자공학과 (2016.03 ~ 2022.02)</SubTitle>
          <br />
          <SubTitle>Nomad Coders (2021)</SubTitle>
          <Content>
            카카오톡 클론 코딩, 바닐라 JS로 크롬 앱(toDoList) 만들기
          </Content>
          <br />
          <Slide right>
            <Document file={`${prefix}/files/kakao.pdf`}>
              <Page height={350} pageNumber={1} />
            </Document>
          </Slide>
          <br />
          <Slide right>
            <Document file={`${prefix}/files/javascript.pdf`}>
              <Page height={350} pageNumber={1} />
            </Document>
          </Slide>
          <br />
          <List_Wrapper>
            <List>Javascript 기반 프론트엔드 과정 학습</List>
            <List>
              변수(Variables), 함수(Functions), 데이터 타입(Data Types), 배열과
              객체(Arrays, Objects), DOM, 이벤트(Events), 조건문과 반복문(if /
              else / for) 개념 학습
            </List>
            <List>Local Storage, 브라우저 저장소를 활용한 데이터 활용</List>
          </List_Wrapper>
        </ScrollBox>
      </Fade>
    </Wrapper>
  );
}
