// Assets
import bg_fixed from 'assets/pages/cloud/bg_fixed.webp';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 492px;
  background-blend-mode: multiply;
  background-image: url(${bg_fixed.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  #image_container {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .bg {
    position: absolute;
    opacity: 0.85;
    height: 100%;
    width: 100%;
    background: #000;

    @media (max-width: 560px) {
      background: rgb(16, 92, 134);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  z-index: 3;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 41px 0px 22px;
    padding: 0 2rem;
    gap: 50px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1200px) {
    align-items: center;
    gap: 13px;
  }

  .action {
    max-width: 523px;

    @media (max-width: 560px) {
      max-width: 195px;
    }
  }

  .action .btn {
    padding: 0;
  }

  .action .btn a {
    color: #00b4db;
    font-size: 15px;
    text-transform: none;

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  max-width: 535px;

  @media (max-width: 560px) {
    max-width: inherit;
    align-items: center;
  }

  h1 {
    color: #00b4db;
    font-size: 33px;
    line-height: 1.2em;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 16px;
      text-align: center;
    }
  }

  p {
    color: #fafafa;
    font-size: 21px;
    line-height: 1.5em;
    font-family: 'open sans', sans-serif;

    @media (max-width: 560px) {
      font-size: 13px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: rgb(255, 255, 255);
  font-size: 16px;
  padding-inline-start: 1.3em;
  margin-inline-start: 0.5em;
`;

export const Item = styled.li`
  list-style-type: disc;
  min-height: 29px;

  p {
    color: #fff;
    font-size: 16px;
    max-width: 455px;
    font-family: 'open sans', sans-serif;

    @media (max-width: 560px) {
      font-size: 13px;
    }
  }
`;
