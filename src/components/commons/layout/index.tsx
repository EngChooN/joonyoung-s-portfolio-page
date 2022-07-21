import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import TopBtn from "../../units/TopBtn";
import Navigation2 from "./navigation2";

const Body = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 465px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default function Layout(props: any) {
  const [scroll, setScroll] = useState(0);
  const [style, setStyle] = useState(false);
  const [topValid, setTopValid] = useState(false);

  useEffect(() => {
    // if (window.pageYOffset === 0) {
    //   setTopValid(false);
    // }
    scrollFunction();
  }, [scroll]);

  const scrollFunction = () => {
    if (scroll > 100) {
      // wheel.current.scrollIntoView({ behavior: "smooth" });
      setStyle(true);
      // setTopValid(true);
    } else if (scroll < 100) {
      setStyle(false);
      // setTopValid(false);
    }
  };

  const onScrollFunction = () => {
    setScroll(window.pageYOffset);
  };

  return (
    <Wrapper onWheel={onScrollFunction}>
      <Navigation2 styleValue={style} />
      <TopBtn />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
