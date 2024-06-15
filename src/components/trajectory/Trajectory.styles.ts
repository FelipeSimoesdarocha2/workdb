import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  margin-bottom: 55px;

  @media (max-width: 560px) {
    margin-bottom: 20px;
    gap: 20px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 47px;

  @media (max-width: 560px) {
    gap: 20px;
  }

  h1 {
    color: #105c86;
    font-size: 33px;
    line-height: 1em;
    letter-spacing: 0em;
    text-align: center;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 20px;
      max-width: 280px;
    }
  }

  p {
    color: #105c86;
    font-size: 20px;
    line-height: 1.5em;
    letter-spacing: normal;
    text-align: center;
    font-family: 'open sans', sans-serif;
    max-width: 808px;

    @media (max-width: 560px) {
      font-size: 15px;
      text-align: start;
      max-width: 267px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 49px;
  max-width: 1250px;

  @media (max-width: 560px) {
    gap: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 560px) {
    gap: 7px;
    max-width: 320px;
  }

  p {
    color: #105c86;
    font-size: 15px;
    line-height: 1.5em;
    letter-spacing: normal;
    font-family: 'open sans', sans-serif;
    max-width: 352px;

    @media (max-width: 560px) {
      font-size: 13px;
      max-width: 272px;
    }
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media (max-width: 560px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgb(0 180 219);
  }

  span h2 {
    color: #105c86;
    font-size: 33px;
    line-height: 1em;
    letter-spacing: 0em;
    font-family: 'poppins', sans-serif;
  }

  h1 {
    color: #105c86;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.8em;
    letter-spacing: normal;
    text-transform: capitalize;
    font-family: 'open sans', sans-serif;
  }
`;
