import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 100;
  position: relative;
  min-height: 490px;
  background-color: #fafafa;

  @media (max-width: 1101px) {
    flex-direction: column;
    padding: 0 2rem 0;
  }

  @media (max-width: 560px) {
    min-height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1101px) {
    margin-top: 24px;
  }

  @media (max-width: 560px) {
    justify-content: start;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;

  @media (max-width: 560px) {
    gap: 21px;
  }

  h1 {
    color: rgb(0, 175, 211);
    font-size: 40px;
    font-weight: 400;
    line-height: 1.1em;
    letter-spacing: 0em;
    font-family: 'poppins', sans-serif;
    max-width: 488px;

    @media (max-width: 560px) {
      font-size: 21px;
      max-width: 230px;
    }
  }

  h1 strong {
    color: #105c86;
    font-size: 40px;
    font-weight: 700;

    @media (max-width: 560px) {
      font-size: 21px;
    }
  }

  p {
    color: #7a7a7a;
    font-size: 23px;
    line-height: 1.8em;
    letter-spacing: 0em;
    font-family: 'open sans', sans-serif;
    text-align: justify;
    max-width: 501px;

    @media (max-width: 560px) {
      font-size: 14px;
      max-width: 250px;
    }
  }
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;
  max-width: 457px;

  @media (max-width: 1101px) {
    max-width: none;
  }

  img {
    position: absolute;
    bottom: 0px;

    @media (max-width: 1101px) {
      position: static;
    }

    @media (max-width: 560px) {
      max-width: 280px;
    }
  }
`;
