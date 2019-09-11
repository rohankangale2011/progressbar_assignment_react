import styled from 'styled-components';

export const SelectContainer = styled.div`
  float: left;
  width: 150px;
  @media screen and (max-width: 520px) {
    width: 30%;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  padding: 6px;
  border-radius: 2px;
`;