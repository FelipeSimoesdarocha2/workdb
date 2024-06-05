import bg_hero from 'assets/pages/guardian/bg_hero.webp';

import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 100px 0 0;
  overflow: hidden;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
  }

  background-blend-mode: multiply;
  background-image: url(${bg_hero.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  overflow: hidden;

  @media (max-width: 1101px) {
    background-position: initial;
  }

  #image_container {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .bg {
    position: absolute;
    opacity: 0.75;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgb(16, 92, 134);
  }
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 200;
  text-align: center;
  text-transform: uppercase;
  font-family: 'poppins', sans-serif;

  span {
    color: #00b5db;
    font-size: 60px;
    font-weight: bold;
    line-height: 0.8em;

    @media (max-width: 1101px) {
      font-size: 44px;
    }
  }
`;
