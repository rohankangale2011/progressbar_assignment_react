import React from 'react';
import {Button, ButtonContainer} from './button.style';

/**
 * Function/Component for button(filer) options container
 * @param {Array} data
 * @param {Function} updateProgressValue 
 */
export const ButtonComponent = React.memo(({data, updateProgressValue}) => {
  return (
    <ButtonContainer>
      {data.map((item, index) => (
        <Button key={index} onClick={updateProgressValue.bind(null, item)}>{item}</Button>        
      ))}
    </ButtonContainer>
  )
});