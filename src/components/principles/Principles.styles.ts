import bg_view from 'assets/pages/about/bg_view.webp';

import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  position: relative;
  width: 100%;
  height: 100;
  min-height: 294px;
  background-blend-mode: multiply;
  background-image: url(${bg_view.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
    opacity: 0.95;
    height: 100%;
    width: 100%;
    z-index: 1;

    background-image: radial-gradient(
        circle at 94.35384114583333% 89.61588541666666%,
        #105c86 0%,
        20%,
        rgba(16, 92, 134, 0) 40%
      ),
      radial-gradient(
        circle at 6.503906249999999% 88.037109375%,
        rgba(0, 175, 211, 0.3) 0%,
        15%,
        rgba(0, 175, 211, 0) 50%
      ),
      radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #105c86 0%, 42%, rgba(16, 92, 134, 0) 70%),
      radial-gradient(circle at 93.6865234375% 11.42578125%, #00afd3 0%, 42%, rgba(0, 175, 211, 0) 70%),
      radial-gradient(circle at 48.9013671875% 49.521484375%, #141416 0%, 100%, rgba(20, 20, 22, 0) 100%);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Itens = styled.div`
  display: flex;
  gap: 100px;
  z-index: 2;

  @media (max-width: 1101px) {
    flex-direction: column;
    margin: 50px 0;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    color: #fafafa;
    font-size: 29px;
    font-family: poppins-semibold, poppins, sans-serif;
  }

  p {
    color: #fafafa;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    max-width: 401px;
  }

  &:last-of-type p {
    max-width: 180px;
    text-align: center;
  }
`;
