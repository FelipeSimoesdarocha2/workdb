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

  h1 {
    color: #00b5db;
    font-size: 34px;
    font-family: poppins-semibold, poppins, sans-serif;
  }
`;

export const Itens = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1076px;
  width: 100%;
  height: 100%;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  max-width: 332px;
  border-radius: 0px 30px 0px 30px;
  border: 2px solid rgba(0, 181, 219, 1);
  height: 344px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
  margin: 24px 22px;

  h2 {
    color: #105c86;
    font-size: 23px;
    font-weight: 400;
    line-height: 0.8em;
    font-family: poppins, sans-serif;
  }

  p {
    color: #7a7a7a;
    font-size: 18px;
    line-height: 1.4em;
    text-align: center;
  }
`;
