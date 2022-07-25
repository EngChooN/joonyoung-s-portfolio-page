import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: -465px;
  /* background: url("/images/rending/rending1.jpg") fixed; */
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    font-size: 27px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

export const Year = styled.h2`
  background-color: white;
  font-size: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
  padding-left: 10px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Content = styled.p`
  font-size: 18px;
  font-weight: 200;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const List_Wrapper = styled.ul`
  margin-top: 20px;
`;

export const List = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 200;
  width: 600px;
  @media (max-width: 767px) {
    font-size: 15px;
    width: 100%;
  }
`;

export const ScrollBox = styled.div`
  overflow: scroll;
  padding: 130px;
  @media (max-width: 767px) {
    padding: 20px;
  }
`;
