import banner_hero from 'assets/pages/infrastructure/banner_hero.webp';

import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  min-height: 386px;

  @media (max-width: 560px) {
    min-height: auto;
  }

  background-blend-mode: multiply;
  background-image: url(${banner_hero.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  #image_container {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .bg {
    position: absolute;
    opacity: 0.80;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 46px;
  z-index: 2;
  width: 100%;
  margin: 68px 0 0;

  @media (max-width: 560px) {
    gap: 2rem;
    padding: 0 2rem 0;
    margin: 30px 0px 19px;
  }
`;

export const Title = styled.div`
  color: #105c86;
  font-size: 33px;
  font-weight: bold;
  line-height: 1em;
  font-family: 'poppins', sans-serif;

  @media (max-width: 560px) {
    font-size: 17px;
    text-align: center;
    max-width: 261px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
  height: 100%;
`;

export const Typography = styled.div`
  max-width: 700px;

  p {
    color: #7a7a7a;
    font-size: 18px;
    line-height: 1.8em;
    text-align: center;
    font-family: 'open sans', sans-serif;

    @media (max-width: 560px) {
      font-size: 15px;
      max-width: 280px;
      text-align: start;
    }
  }
`;
