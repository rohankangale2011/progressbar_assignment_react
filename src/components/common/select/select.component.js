import React from 'react';
import {Select, SelectContainer} from './select.style';

/**
 * Function/Component: Select component handling displaying and maintaining selected progressbar value
 * @param {Array} data
 * @param {Function} setSelectedData
 * @param {Number} selectedBar
 */
const SelectComponent = React.memo(({data = [], setSelectedData, selectedBar}) => {
  /**
   * Function updating the selected conponent's value
   * @param {Object} evt 
   */
  function updateSelectedValue(evt) {
    const {target: {value}} = evt;
    setSelectedData(value);
  };
  
  return (
    <SelectContainer>
      <Select onChange={updateSelectedValue} value={selectedBar}>
        {data.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </Select>
    </SelectContainer>
  );
});

export default SelectComponent;