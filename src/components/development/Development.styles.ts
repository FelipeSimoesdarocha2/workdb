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
  gap: 64px;
  width: 100%;
  margin: 103px 0 0;

  @media (max-width: 1100px) {
    padding: 0 2rem 0;
    gap: 21px;
  }

  @media (max-width: 560px) {
    margin: 26px 0 64px;
    gap: 21px;
  }
`;

export const Title = styled.div`
  color: #105c86;
  font-size: 33px;
  font-weight: bold;
  line-height: 1em;
  font-family: 'poppins', sans-serif;
  text-align: center;
  max-width: 716px;

  @media (max-width: 1100px) {
    font-size: 17px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Typography = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.8em;
    letter-spacing: normal;
    font-family: 'open sans', sans-serif;
    max-width: 600px;
  }

  p:last-child {
    max-width: 547px;
  }
`;
