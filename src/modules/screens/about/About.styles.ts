import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  width: 100%;
  position: relative;

  @media (min-width: 1400px) {
    background-repeat: repeat;
    background-size: cover;
  }

  @media (max-width: 560px) {
    min-height: 250px;
  }

  video {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
  }

  #video_container {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .bg {
    position: absolute;
    background-color: rgb(16, 92, 134);
    opacity: 0.5;
    height: 100%;
    width: 100%;
    z-index: 1;

    @media (max-width: 560px) {
      opacity: 0.7;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  z-index: 5;
  margin: 140px 0 0;

  @media (max-width: 560px) {
    margin: 50px 0 0;
  }

  h1 {
    color: #fff;
    font-weight: 400;
    font-size: 52px;
    line-height: 1em;
    text-align: center;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 25px;
    }
  }

  span {
    color: #00b5db;
    font-size: 68px;
    font-weight: bold;
    line-height: 1em;
    text-align: center;
    display: inline-block;
    font-family: poppins, sans-serif;

    @media (max-width: 560px) {
      font-size: 29px;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  min-height: 260px;
  background-image: radial-gradient(
      circle at 94.35384114583333% 89.61588541666666%,
      #105c86 0%,
      20%,
      rgba(16, 92, 134, 0) 40%
    ),
    radial-gradient(
      circle at 6.503906249999999% 88.037109375%,
      rgba(16, 92, 134, 0.99) 0%,
      25%,
      rgba(16, 92, 134, 0) 50%
    ),
    radial-gradient(circle at 5.833333333333333% 15%, #105c86 0%, 42%, rgba(16, 92, 134, 0) 70%),
    radial-gradient(circle at 93.6865234375% 11.42578125%, #00b4db 0%, 42%, rgba(0, 180, 219, 0) 70%),
    radial-gradient(circle at 48.9013671875% 49.521484375%, #141416 0%, 100%, rgba(20, 20, 22, 0) 100%);

  @media (max-width: 1101px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 560px) {
    min-height: 412px;
  }
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100%;
  max-width: 611px;
  min-height: 260px;

  @media (max-width: 750px) {
    overflow: hidden;
    max-width: none;
  }

  @media (max-width: 560px) {
    min-height: 210px;
    overflow: hidden;
  }

  img:first-child {
    position: absolute;
    right: auto;
    left: -60px;
    bottom: 0;

    @media (max-width: 560px) {
      max-width: 445px;
      bottom: 35px;
      left: auto;
    }
  }

  img:last-child {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -100px;

    @media (max-width: 1101px) {
      position: relative;
      bottom: -34px;
    }

    @media (max-width: 560px) {
      max-width: 308px;
      position: relative;
      bottom: -34px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 2;
  backdrop-filter: blur(16px);
  padding: 10px;

  @media (max-width: 1101px) {
    margin-top: 24px;
    backdrop-filter: inherit;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 560px) {
    align-items: center;
    gap: 12px;
  }

  h1 {
    color: #fafafa;
    font-size: 30px;
    font-weight: 400;
    line-height: 1em;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 20px;
      line-height: 0.9em;
      text-align: center;
    }
  }

  span {
    color: #00b4db;
    font-size: 50px;
    font-weight: bold;
    line-height: 0.8em;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 25px;
    }
  }

  p {
    color: #fff;
    font-size: 18px;
    font-family: 'open sans', sans-serif;
    max-width: 463px;

    @media (max-width: 560px) {
      max-width: 239px;
      font-size: 14px;
    }
  }
`;
