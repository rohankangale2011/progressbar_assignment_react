import React from 'react';
import { BarFilled, BarWrapper, BarWeight } from './bar.style';

/**
 * Function/Component displaying the progress bar's
 * @param {Array} data 
 */
export const BarComponent = React.memo(({ data, width }) => {
  return (
    <>
      {data.map((item, index) => (
        <BarWrapper key={index} width={width}>
          <BarFilled
            width={item.value}
            setbg={item.percentValue}
          />
          <BarWeight>{item.percentValue}%</BarWeight>
        </BarWrapper>
      ))}
    </>
  );
});