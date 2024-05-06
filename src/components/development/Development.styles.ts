import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  min-height: 386px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 46px;
  width: 100%;
  margin: 68px 0 0;

  @media (max-width: 1100px) {
    gap: 2rem;
    padding: 0 2rem 0;
  }
`;

export const Title = styled.div`
  color: #105c86;
  font-size: 33px;
  font-weight: bold;
  line-height: 1em;
  font-family: 'poppins', sans-serif;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
  height: 100%;
`;

export const Typography = styled.div`
  display: flex;
  gap: 30px;

  p {
    color: #7a7a7a;
    font-size: 18px;
    line-height: 1.8em;
    text-align: center;
    font-family: 'open sans', sans-serif;
  }
`;
