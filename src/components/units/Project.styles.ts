import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: -465px;
  height: 100vh;
  /* background: url("/images/rending/rending1.jpg") fixed; */
  /* background-attachment: fixed;
  background-size: cover; */
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Left_Project_Wrapper = styled.section`
  width: 800px;
  height: 300px;
  /* border: 1px solid black; */
  background-color: white;
  border-radius: 30px;
  margin-bottom: 120px;
  margin-left: 500px;
  border: 2px solid #e0e0e0;
  @media (max-width: 767px) {
    width: 340px;
    margin-left: 0px;
    margin: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Right_Project_Wrapper = styled.section`
  width: 800px;
  height: 300px;
  /* border: 1px solid black; */
  background-color: white;
  border-radius: 30px;
  margin-bottom: 120px;
  margin-right: 500px;
  border: 2px solid #e0e0e0;
  display: flex;
  @media (max-width: 767px) {
    width: 340px;
    margin-right: 0px;
    margin: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ScrollBox = styled.div`
  padding-top: 150px;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  :first-child {
    margin-top: 150px;
  }
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 767px) {
    padding-top: 100px;
    padding-bottom: 50px;
    width: 100%;
  }
`;

export const Left_Img = styled.img`
  object-fit: cover;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  border: 2px solid #e0e0e0;
  /* background-color: black; */
  margin-right: 30px;
  float: right;
  margin-top: 25px;
  @media (max-width: 767px) {
    width: 300px;
    height: 120px;
    margin: 20px;
  }
`;

export const Right_Img = styled.img`
  object-fit: cover;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  /* background-color: black; */
  margin-left: 30px;
  margin-top: 25px;
  border: 2px solid #e0e0e0;
  @media (max-width: 767px) {
    width: 300px;
    height: 120px;
    margin: 20px;
  }
`;

export const Left_Content_Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  @media (max-width: 767px) {
    padding: 20px;
  }
`;

export const Right_Content_Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  @media (max-width: 767px) {
    padding: 20px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.p`
  margin-right: 10px;
  padding: 4px;
  border-radius: 5px;
  background-color: beige;
  @media (max-width: 767px) {
    font-size: 11px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const Link = styled.p`
  color: gray;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: underline;
  @media (max-width: 767px) {
    font-size: 11px;
  }
`;

export const Right_Date = styled.h1`
  font-size: 35px;
  margin-left: 300px;
  margin-bottom: 30px;
  font-weight: 200;
  @media (max-width: 767px) {
    font-size: 25px;
    margin: 0;
  }
`;

export const Left_Date = styled.h1`
  font-size: 35px;
  margin-right: 300px;
  margin-bottom: 30px;
  font-weight: 200;
  @media (max-width: 767px) {
    font-size: 25px;
    margin: 0;
  }
`;
