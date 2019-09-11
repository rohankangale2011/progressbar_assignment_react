import {BASE_API} from '../../constants/api';

/**
 * Function fetching the progress bar and related value from provided API/server
 */
export const getProgressBarData = () => {
  return fetch(BASE_API)
    .then(res => res.json())
    .then(resp => {
      return resp;
    }, err => {
      return err;
    })
}