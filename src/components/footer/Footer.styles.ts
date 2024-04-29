import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #235c88;
  min-height: 281px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1101px) {
    flex-direction: column;
  }
`;

export const Wrraper = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const Pages = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #dbdbdb;
    font-size: 15px;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Network = styled.div`
  display: flex;
  gap: 8px;
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
