import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  height: 100;
  background-color: #fafafa;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin: 63px 0 120px;

  @media (max-width: 560px) {
    gap: 41px;
    margin: 31px 0 70px;
  }
`;

export const Typography = styled.div`
  h1 {
    color: #105c86;
    font-size: 34px;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 20px;
      line-height: 0.95em;
    }
  }

  span {
    color: #00b4db;
    font-size: 50px;
    font-weight: bold;
    line-height: 0.5em;
    display: inline-block;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 25px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 740px;
  padding: 0 20px;
`;

export const Itens = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 60px;
  }

  @media (max-width: 560px) {
    gap: 34px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 300px;

  @media (max-width: 560px) {
    gap: 10px;
  }

  p {
    color: #105c86;
    font-size: 16px;
    line-height: 1.2em;
    font-family: 'open sans', sans-serif;

    @media (max-width: 560px) {
      font-size: 13px;
    }
  }
`;

export const Container_Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 87px;

  @media (max-width: 560px) {
    height: auto;
  }
`;
