import styled from 'styled-components';

export const BarFilled = styled.div`
  background-color: ${props => props.setbg > 100 ? 'red' : '#77bcf4'};
  height: inherit;
  width: ${props => `${props.width}px`};
  transition: width 0.6s;
`;

export const BarWrapper = styled.div`
  height: 40px;
  width: ${props => `${props.width}px`}
  border: 1px solid #ddd;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
`;

export const BarWeight = styled.span`
  display: flex;
  justify-content: center;
  margin-top: -28px;
  font-size: 12px;
  font-weight: bold;
`; 