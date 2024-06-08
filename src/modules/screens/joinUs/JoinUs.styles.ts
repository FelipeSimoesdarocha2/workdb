import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 725px;
  background-image: var(--bg_about);
  overflow: hidden;

  @media (max-width: 1101px) {
    flex-direction: column;
  }

  #image_container {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .bg {
    position: absolute;
    opacity: 0.9;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-image: var(--bg_about);
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  position: relative;
  z-index: 5;
  margin-top: 100px;

  h1 {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2em;
    font-family: 'poppins', sans-serif;
    text-transform: uppercase;
    max-width: 435px;
  }

  h1 strong {
    color: rgb(0, 175, 211);
    font-weight: bold;
    font-size: 83px;
    font-family: 'poppins', sans-serif;
    line-height: 0.8em;
    display: inline-block;
  }

  p {
    color: #fafafa;
    font-size: 24px;
    font-weight: 300;
    max-width: 481px;
  }
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 122px;
  z-index: 2;

  @media (max-width: 1101px) {
    margin: 0;
    max-height: 40%;
    z-index: 1;
  }

  img:first-child {
    position: absolute;
    left: 0;
    right: auto;
    transform: rotate(180deg) translate(30%, 28%);
  }

  img:last-child {
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
`;
