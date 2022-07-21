import styled from "@emotion/styled";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  /* display: ${(props: any) => (props.topValid === true ? "" : "none")}; */
  cursor: pointer;
  z-index: 3;
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
    margin: 20px;
  }
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 200;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export default function TopBtn(props: any) {
  const onClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper onClick={onClickTop}>
      <Title>TOP</Title>
    </Wrapper>
  );
}
