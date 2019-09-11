import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: ${props => `${props.width}px`};
  position: relative;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
  padding: 10px 0 20px;
`;

export const ErrorTitle = styled.div`
  font-size: 14px;
`;