import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Navigation2 from "./navigation2";

const Body = styled.div`
  height: 100%;
  margin-top: 465px;
`;

const Wrapper = styled.div``;

export default function Layout(props: any) {
  const router = useRouter();
  const currentUrl = router.asPath;
  return (
    <Wrapper>
      {currentUrl === "/" ||
      currentUrl === "/Joonyoung/Skills" ||
      currentUrl === "/Joonyoung/About" ||
      currentUrl === "/Joonyoung/Project" ||
      currentUrl === "/Joonyoung/Career&Education" ? (
        <Navigation2 />
      ) : (
        <></>
      )}
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
