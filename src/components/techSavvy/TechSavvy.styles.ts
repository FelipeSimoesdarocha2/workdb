import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 492px;
  background-color: #fafafa;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 1101px) {
    flex-direction: column-reverse;
    padding: 0 2rem 0;
    margin-top: 24px;
  }

  @media (max-width: 560px) {
    margin: 43px 0px 21px;

    img {
      max-width: 225px;
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;

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
    max-width: 627px;

    @media (max-width: 560px) {
      font-size: 21px;
      max-width: 280px;
    }
  }

  h1 strong:first-child {
    color: #105c86;
    font-weight: 400;
    font-size: 33px;

    @media (max-width: 560px) {
      font-size: 21px;
    }
  }

  p {
    color: rgb(138, 138, 138);
    font-size: 20px;
    line-height: 1.8em;
    letter-spacing: 0em;
    font-family: 'open sans', sans-serif;
    text-align: justify;
    max-width: 721px;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;
