import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  min-height: 500px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
  width: 100%;
  margin: 68px 0 0;

  @media (max-width: 1101px) {
    padding: 0 2rem 0;
  }

  @media (max-width: 560px) {
    gap: 20px;
    margin: 20px 0 0;
  }
`;

export const Title = styled.div`
  color: #105c86;
  font-size: 33px;
  font-weight: bold;
  line-height: 1em;
  font-family: 'poppins', sans-serif;

  @media (max-width: 1101px) {
    text-align: center;
  }

  @media (max-width: 560px) {
    font-size: 17px;
    max-width: 280px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 2;
  max-width: 679px;
  margin-top: 47px;

  p {
    color: #7a7a7a;
    font-size: 18px;
    line-height: 1.8em;
    font-family: 'open sans', sans-serif;

    @media (max-width: 560px) {
      font-size: 15px;
    }
  }

  @media (max-width: 560px) {
    margin: 0;
  }
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: start;
  width: 30%;
  height: 100%;

  div {
    display: flex;
    position: relative;
    height: 85%;
    width: 100%;

    @media (max-width: 1101px) {
      justify-content: center;
      position: static;
    }
  }

  img:first-child {
    position: absolute;
    bottom: 70px;
    right: auto;
    left: 0px;
    transform: rotate(180deg);
    max-width: 568px;

    @media (max-width: 560px) {
      max-width: 316px;
      bottom: auto;
      left: auto;
    }
  }

  img:last-child {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0px;
    z-index: 1;

    @media (max-width: 1101px) {
      position: relative;
    }

    @media (max-width: 560px) {
      max-width: 280px;
    }
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
