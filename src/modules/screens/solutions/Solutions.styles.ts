import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0 0;
  width: 100%;
  background-image: var(--bg_solutions);

  @media (max-width: 1101px) {
    flex-direction: column;
    margin: 150px 0 0;
    padding: 0 2rem;
  }

  @media (max-width: 560px) {
    gap: 29px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 63px;
  margin: 40px 0 0;

  @media (max-width: 1101px) {
    align-items: center;
    margin: 0;
  }

  @media (max-width: 560px) {
    align-items: start;
    gap: 13px;
    width: 100%;

    .btn {
      display: none;
    }
  }

  h1 {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2em;
    font-family: 'poppins', sans-serif;
    max-width: 357px;

    @media (max-width: 1101px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      font-size: 19px;
      text-align: start;
      max-width: 161px;
    }
  }

  h1 strong {
    color: #00afd3;
    font-size: 68px;
    line-height: 0.8em;
    letter-spacing: 0em;
    text-transform: uppercase;

    @media (max-width: 560px) {
      font-size: 29px;
    }
  }

  p {
    color: #fafafa;
    font-weight: 200;
    font-size: 24px;
    max-width: 594px;

    font-family: 'poppins', sans-serif;

    @media (max-width: 1101px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      font-size: 15px;
      text-align: start;
      max-width: 271px;
    }
  }

  p strong:first-child {
    font-style: italic;
    font-weight: 400;
  }

  p strong:last-child {
    color: #00b5db;
    font-weight: 400;
  }
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
  position: relative;
  width: 100%;
  height: 571px;
  max-width: 401px;

  .wrapper_btn {
    display: none;
    width: 100%;
  }

  .btn {
    margin-top: 35px;
    max-width: 169px;

    a {
      font-size: 12px;
    }
  }

  @media (max-width: 1101px) {
    justify-content: center;
    max-width: none;
    height: 100%;
  }

  @media (max-width: 560px) {
    justify-content: flex-end;
    align-items: flex-start;
    height: 285px;

    .wrapper_btn {
      display: flex;
    }
  }

  .bg_hero {
    position: absolute;
    right: auto;
    left: -100px;
    top: 120px;
    bottom: auto;

    transform: rotate(180deg) translate(30%, 28%);
    max-width: 739px;

    @media (max-width: 560px) {
      max-width: 318px;
      left: 60px;
      transform: inherit;
    }
  }

  .banner_hero {
    position: absolute;
    right: 0;
    left: -100px;
    bottom: 0px;
    z-index: 1;

    @media (max-width: 1101px) {
      position: relative;
    }

    @media (max-width: 560px) {
      position: absolute;

      max-width: 245px;
      left: auto;
      right: auto;
    }
  }
`;
