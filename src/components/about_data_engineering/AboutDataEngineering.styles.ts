import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 100;
  position: relative;
  min-height: 524px;
  background-color: #fafafa;

  @media (max-width: 1101px) {
    flex-direction: column;
    padding: 0 2rem 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1101px) {
    margin-top: 24px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 53px;

  @media (max-width: 560px) {
    gap: 21px;
  }

  h1 {
    color: #105c86;
    font-weight: 200;
    font-size: 33px;
    line-height: 1em;
    letter-spacing: normal;
    font-family: 'poppins', sans-serif;
    max-width: 604px;

    @media (max-width: 560px) {
      font-size: 21px;
      text-align: center;
    }
  }

  h1 strong:first-child {
    color: #105c86;
    font-weight: 400;
    font-size: 33px;

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  h1 strong:last-child {
    color: #00b4db;
    font-size: 26px;
    font-weight: 600;
    line-height: 0.8em;
    letter-spacing: 0em;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  p {
    color: rgb(138, 138, 138);
    font-size: 20px;
    line-height: 1.8em;
    letter-spacing: 0em;
    font-family: 'open sans', sans-serif;
    text-align: justify;
    max-width: 578px;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;
  max-width: 400px;

  @media (max-width: 1101px) {
    max-width: none;
  }

  img {
    position: absolute;
    top: -31px;

    @media (max-width: 1101px) {
      position: static;
    }

    @media (max-width: 560px) {
      max-width: 220px;
    }
  }
`;
