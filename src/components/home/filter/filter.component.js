import React from 'react';
import {ButtonComponent} from '../../common/button/button.component';
import SelectComponent from '../../common/select/select.component';

/**
 * Function/Component: Options container containing the select and button components/filters
 * @param {Array} btnData
 * @param {Array} selectData
 * @param {Function} setSelectedData
 * @param {Number} selectedBar
 * @param {Function} updateProgressValue 
 */
export default function FilterComponent({
  btnData = [], 
  selectData = [], 
  setSelectedData, 
  selectedBar, 
  updateProgressValue
}) {
  return (
    <>
      <SelectComponent data={selectData} setSelectedData={setSelectedData} selectedBar={selectedBar} />
      <ButtonComponent data={btnData} updateProgressValue={updateProgressValue} />
    </>
  )
};