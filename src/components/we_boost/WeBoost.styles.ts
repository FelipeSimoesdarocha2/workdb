import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 669px;
  background-color: #fafafa;

  @media (max-width: 1101px) {
    min-height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  width: 100%;

  @media (max-width: 1101px) {
    padding: 0 2rem 0;
  }

  @media (max-width: 560px) {
    margin: 23px 0 43px;
    justify-content: start;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 560px) {
    img {
      max-width: 122px;
    }
  }

  @media (max-width: 1101px) {
    .no_mobile {
      display: none;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;

    @media (min-width: 1101px) {
      img {
        display: none;
      }
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  h1 {
    color: #105c86;
    font-size: 33px;
    font-weight: 300;
    font-family: 'open sans', sans-serif;
    max-width: 648px;

    @media (max-width: 1101px) {
      max-width: 585px;
    }

    @media (max-width: 560px) {
      font-size: 15px;
      font-weight: 300;
      max-width: 156px;
    }
  }

  h1 strong {
    font-weight: 500;
  }

  p {
    color: #7a7a7a;
    font-size: 20px;
    line-height: 1.8em;
    letter-spacing: normal;
    font-family: 'open sans', sans-serif;
    max-width: 721px;

    @media (max-width: 560px) {
      font-size: 15px;
    }
  }
`;

export const Content_Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    gap: 20px;
  }
`;
