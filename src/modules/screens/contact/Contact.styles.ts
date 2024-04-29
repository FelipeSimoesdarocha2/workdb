import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Local = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: rgb(16, 92, 134);
    font-size: 28px;
    font-weight: 500;
  }

  h1 {
    font-size: 83px;
    color: rgb(0, 175, 211);
    line-height: 0.9em;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Maps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  iframe {
    border: none;
    border-radius: 5px;
  }

  iframe:hover {
    box-shadow: 0px 4px 5px 0px #cccccc;
  }

  h1 {
    color: #105c86;
    font-size: 24px;
  }
`;
