import styled from 'styled-components';

export const ButtonContainer = styled.div`
  float: left;
  width: 350px;
  text-align: right;
  @media screen and (max-width: 520px) {
    width: 70%;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    text-align: left;
    padding: 10px 0;
  }
`;

export const Button = styled.button`
  padding: 8px 10px;
  font-size: 12px;
  font-weight: bold;
  background: transparent;
  border: 1px solid #585858;
  border-radius: 2px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`;