// Assets
import bg_fixed from 'assets/pages/infrastructure/bg_fixed.webp';

import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  min-height: 573px;
  background-blend-mode: multiply;
  background-image: url(${bg_fixed.src});
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
    opacity: 0.8;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgb(16, 92, 134);
  }
`;

export const Container = styled.div`
  z-index: 2;
  width: 100%;
  margin: 71px 0 67px;

  @media (max-width: 560px) {
    margin: 37px 0 51px;
    padding: 0 2rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  @media (max-width: 560px) {
    gap: 33px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 425px;
  border: 2px solid rgb(0 175 211);
  border-radius: 0px 30px 0px 30px;
  padding: 0 12px;

  @media (max-width: 560px) {
    padding: 0 12px 26px;
  }

  ul {
  }

  li {
    color: #fafafa;
    font-size: 20px;
    list-style-type: disc;

    @media (max-width: 560px) {
      font-size: 15px;
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
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
    max-width: 302px;

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
    max-width: 354px;

    @media (max-width: 560px) {
      font-size: 15px;
      text-align: start;

      padding: 0 12px;
    }
  }
`;
