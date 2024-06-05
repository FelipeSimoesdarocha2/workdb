import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  min-height: 533px;

  @media (max-width: 560px) {
    min-height: inherit;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    margin: 49px 0 0;
    padding: 0 2rem;
  }

  @media (max-width: 560px) {
    margin: 29px 0 46px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 560px) {
    align-items: center;
  }

  h1 {
    color: #105c86;
    font-size: 33px;
    font-weight: 600;
    line-height: 0.8em;
    letter-spacing: normal;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 20px;
    }
  }

  p {
    color: #105c86;
    font-size: 16px;
    line-height: 1.8em;
    letter-spacing: normal;
    font-family: 'open sans', sans-serif;
    max-width: 588px;

    @media (max-width: 560px) {
      font-size: 13px;
    }
  }

  p:last-child {
    color: rgb(138, 138, 138);
    font-size: 19px;
    font-weight: 300;
    line-height: normal;
    letter-spacing: normal;
    font-family: 'open sans', sans-serif;
    margin-top: 70px;

    @media (max-width: 560px) {
      font-size: 15px;
      max-width: 225px;
      text-align: center;
      margin-top: 29px;
    }
  }

  p:last-child strong {
    font-weight: 500;
  }
`;

export const Container_Image = styled.div`
  position: relative;
  width: 100%;
  max-width: 395px;
  height: 100%;

  .bg_hero {
    position: absolute;
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transform: translate(-27%, -1%) rotate(-180deg);

    @media (max-width: 800px) {
      display: none;
    }
  }

  .handsome_man {
    position: absolute;
    top: auto;
    bottom: 0;

    @media (max-width: 1101px) {
      position: relative;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }
`;
