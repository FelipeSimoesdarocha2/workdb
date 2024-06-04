// Assets
import performance from 'assets/pages/dataEngineering/storage.webp';

import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  min-height: 434px;
  background-blend-mode: multiply;
  background-image: url(${performance.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  position: relative;

  #image_container {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .bg {
    position: absolute;
    opacity: 0.7;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgb(16, 92, 134);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 62px;
  z-index: 2;
  width: 100%;
  margin: 90px 0 51px;

  @media (max-width: 560px) {
    margin: 37px 0 51px;
    padding: 0 2rem 0;
    gap: 33px;
  }
`;

export const Title = styled.div`
  color: #fafafa;
  font-size: 33px;
  font-weight: bold;
  line-height: 1em;
  font-family: 'poppins', sans-serif;

  @media (max-width: 560px) {
    font-size: 19px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  @media (max-width: 560px) {
    gap: 33px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 157px;
  max-width: 288px;
  border: 2px solid rgb(0 175 211);
  border-radius: 0px 30px 0px 30px;
  padding: 0 12px;
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 31px 0 41px;

  @media (max-width: 560px) {
    margin: 21px 0 21px;
    gap: 11px;
  }

  h1 {
    color: #00afd3;
    font-size: 25px;
    font-weight: 600;
    line-height: 1em;
    letter-spacing: 0em;
    font-family: 'poppins', sans-serif;
    text-align: center;
    max-width: 255px;

    @media (max-width: 560px) {
      font-size: 15px;
      max-width: 147px;
    }
  }

  p {
    color: #fafafa;
    font-size: 20px;
    line-height: 1.3em;
    letter-spacing: normal;
    font-family: 'open sans', sans-serif;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 15px;
    }
  }
`;
