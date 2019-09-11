import {BAR_WIDTH} from '../constants/data';

/**
 * Function setting/updating the progress bar and its related data's value(received from server)
 * @param {Object} data 
 */
export const setProgressBarData = async (data = {}) => {
  const {bars, buttons, limit} = data;
  const promise = new Promise((resolve, reject) => {
    try {
      const barData = bars.map((item, index) => {
        return {
          id: index,
          name: `#Progress ${index}`,
          value: Math.round((BAR_WIDTH*item)/limit),
          percentValue: Math.round((item*100)/limit)
        }
      });
      resolve({barData, buttons, limit});
    } catch {
      reject({});
    }
  });

  const result = await promise;
  return result;
};

/**
 * Function updating the progress bar's data s per provided input values
 * @param {Array} data 
 * @param {String | Number} selectedBar 
 * @param {Number} btnValue 
 * @param {Number} limit 
 */
export const updateSelectedBarData = async (data, selectedBar, btnValue, limit) => {
  const promise = new Promise((resolve, reject) => {
    try {
      const updatedBarData = data.map(item => {
        if(item.id === parseInt(selectedBar)) {
          const updatedValue = item.value + Math.round((BAR_WIDTH*btnValue)/limit);
          const updatedPerValue = item.percentValue + Math.round((btnValue*100)/limit);
          item.value = updatedValue > 0 ? updatedValue : 0;
          item.percentValue = updatedPerValue > 0 ? updatedPerValue : 0;
        };
        return item;
      });  
      resolve(updatedBarData);
    } catch {
      reject([]);
    }
  });

  const result = await promise;
  return result;
}