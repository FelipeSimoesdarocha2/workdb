import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(250, 250, 250);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 82px 0 62px;
  width: 100%;

  @media (max-width: 560px) {
    gap: 21px;
    margin: 28px 0 47px;
  }

  h1 {
    color: #00b5db;
    font-size: 34px;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 21px;
    }
  }
`;

export const Itens = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  height: 100%;
  max-width: 1076px;

  @media (max-width: 560px) {
    gap: 18px;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  height: 344px;
  max-width: 332px;
  border-radius: 0px 30px 0px 30px;
  border: 2px solid rgba(0, 181, 219, 1);

  @media (max-width: 560px) {
    max-width: 232px;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  margin: 24px 22px;

  @media (max-width: 560px) {
    gap: 10px;
    margin: 24px 8px;

    img {
      max-width: 80px;
      margin-bottom: 8px;
    }
  }

  h2 {
    color: #105c86;
    font-size: 23px;
    font-weight: 400;
    line-height: 0.8em;
    font-family: 'poppins', sans-serif;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }

  p {
    color: #7a7a7a;
    font-size: 18px;
    line-height: 1.4em;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 15px;
    }
  }
`;
