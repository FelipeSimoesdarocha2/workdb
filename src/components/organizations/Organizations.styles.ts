import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  min-height: 317px;
`;

export const Carrousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 186px;

  @media (max-width: 560px) {
    background-color: #f1f1f1;
    min-height: auto;
    padding: 47px 0;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 980px;
  }

  button:first-child {
    margin: 0 66px;
    position: absolute;
    left: 0;

    @media (max-width: 750px) {
      margin: 0 32px;
    }
  }

  button:last-child {
    position: absolute;
    right: 0;
    transform: rotate(-180deg);
    margin: 0 66px;

    @media (max-width: 750px) {
      margin: 0 32px;
    }
  }

  @media (max-width: 560px) {
    button {
      display: none;
    }
  }
`;

export const Container_Itens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 560px) {
    max-width: 560px;
    flex-direction: column;
    padding: 0 26px;
  }
`;

export const Itens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 560px) {
    flex-wrap: wrap;
    gap: 30px;
    max-width: 560px;
  }
`;

export const Item = styled.div`
  @media (max-width: 750px) {
    img {
      width: 60px;
    }
  }
`;
