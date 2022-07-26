import styled from "@emotion/styled";
// @ts-ignore
import Zoom from "react-reveal/Zoom";
// @ts-ignore
import Slide from "react-reveal/Slide";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Bounce from "react-reveal/Bounce";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -465px;
`;

export const Box1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: url("/images/rending/rending1.jpg") fixed; */
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  @media (max-width: 767px) {
    background-image: none;
  }
`;

export const HelloLottie = styled.iframe`
  border: none;
  pointer-events: none;
  height: 150px;
  width: 300px;
  @media (max-width: 767px) {
    height: 80px;
  }
`;

export const Box1_Btns = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Box1_Btn_Github = styled.img`
  margin-right: 50px;
  width: 30px;
  height: 30px;
  margin-top: 2px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`;

export const Box1_Btn_Velog = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;

export const Box1_Zoom = styled(Zoom)``;

export const Box1_Zoom_Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box1_Title = styled.h1`
  margin-top: 90px;
  font-size: 50px;
  font-weight: 300;
  color: black;
`;

export const Box1_Content = styled.p`
  font-size: 25px;
  font-weight: 300;
  color: black;
  @media (max-width: 767px) {
    font-size: 20px;
    text-align: center;
    padding: 20px;
  }
`;

export const Box1_SubContent = styled.p`
  font-size: 15px;
  font-weight: 200;
  margin-top: 40px;
  @media (max-width: 767px) {
    font-size: 10px;
    text-align: center;
  }
`;

export const Box2 = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
  padding-top: 100px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 180px;
  }
`;

export const Box2_Content_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

export const Box2_Slide = styled(Fade)``;

export const ReactLottie = styled.iframe`
  border: none;
  margin-left: 150px;
  pointer-events: none;
  height: 300px;
  @media (max-width: 767px) {
    height: 300px;
    margin-left: 0px;
    width: 230px;
  }
`;

export const Box2_Content = styled.p`
  font-size: 23px;
  font-weight: 200;
  width: 600px;
  @media (max-width: 767px) {
    width: 300px;
    font-size: 17px;
  }
`;

export const Box3 = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 400px;
  margin-top: 100px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
  }
`;

export const Box3_Content_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

export const Box3_Slide = styled(Fade)``;

export const Box3_Content = styled.p`
  font-size: 22px;
  font-weight: 200;
  width: 610px;
  @media (max-width: 767px) {
    width: 300px;
    font-size: 17px;
  }
`;

export const ThinkLottie = styled.iframe`
  border: none;
  margin-right: 150px;
  pointer-events: none;
  height: 400px;
  @media (max-width: 767px) {
    margin-top: 350px;
    margin-right: 0px;
    height: 200px;
  }
`;

export const Box4 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 400px;
  margin-top: 30px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 280px;
  }
`;

export const Box4_Slide = styled(Fade)``;

export const Box4_Content = styled.p`
  font-size: 23px;
  font-weight: 200;
  width: 550px;
  @media (max-width: 767px) {
    width: 300px;
    font-size: 17px;
  }
`;

export const Box4_Content_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;

export const StudyLottie = styled.iframe`
  border: none;
  margin-left: 180px;
  pointer-events: none;
  height: 400px;
  @media (max-width: 767px) {
    margin-top: 20px;
    height: 150px;
    margin-left: 0px;
  }
`;

export const Box5 = styled.section`
  background-color: #f4f4f4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    padding-bottom: 50px;
    height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Box5_Content_Wrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box5_Content = styled.p`
  font-size: 25px;
  font-weight: 320;
  margin-top: 30px;
  @media (max-width: 767px) {
    width: 300px;
    font-size: 17px;
  }
`;

export const Box5_Review_Wrapper = styled.div`
  width: 1050px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  @media (max-width: 767px) {
    width: 300px;
  }
`;

export const Box5_Review = styled.div`
  margin-right: 40px;
  width: 320px;
  height: 550px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex: 0 0 auto;
  border: 2px solid #e0e0e0;
  @media (max-width: 767px) {
    width: 300px;
    height: 400px;
    margin-right: 30px;
    border: none;
  }
`;

export const Box5_Slide = styled(Zoom)``;

export const Review_Name = styled.p`
  font-size: 17px;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const Review_Content_Wrapper = styled.div``;

export const Review_Tile = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export const Review_Content = styled.p`
  @media (max-width: 767px) {
    font-size: 11px;
  }
`;

export const Box6 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 767px) {
    margin-top: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Box6_Slide = styled(Slide)``;

export const Box6_Content_Wrapper = styled.div``;

export const Box6_Content = styled.p`
  font-size: 23px;
  font-weight: 200;
  margin-right: 90px;
  @media (max-width: 767px) {
    margin-right: 0px;
    width: 300px;
    font-size: 17px;
  }
`;

export const Pencil_Lottie = styled.iframe`
  border: none;
  height: 250px;
  margin-bottom: 20px;
  pointer-events: none;
  @media (max-width: 767px) {
    height: 200px;
  }
`;

export const Bounce_Wrapper = styled(Bounce)``;
