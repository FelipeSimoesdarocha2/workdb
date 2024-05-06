import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin: 107px 0 120px;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin: 67px 0 120px;
  }

  @media (max-width: 560px) {
    gap: 10px;
    margin: 0 0 40px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 541px;
  max-height: 305px;

  @media (max-width: 560px) {
    transform: scale(0.6);
  }

  #image_container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 110%;
    bottom: -22px;
    z-index: 42;
  }

  #image_container img {
    position: absolute;
    width: 100%;
    border-radius: 8px;
  }

  img {
    border-radius: 8px;
    z-index: 1;
  }

  .line {
    position: absolute;
    bottom: 24px;
    left: -47px;
    right: 32px;
    top: -22px;
    border-radius: 0px 30px 0px 30px;
    border: 2px solid rgba(0, 181, 219, 1);
  }
`;

export const History = styled.div`
  display: flex;
  align-items: center;
  max-width: 644px;
  flex-wrap: wrap;

  p {
    flex-wrap: wrap;
    color: #7a7a7a;
    font-size: 18px;
    line-height: 1.4em;
  }

  @media (max-width: 560px) {
    justify-content: center;
    padding: 0 22px;

    p {
      font-size: 14px;
      text-align: center;
      padding: 0 12px;
    }
  }

  span {
    font-weight: 700;
    display: inline-block;
  }
`;
