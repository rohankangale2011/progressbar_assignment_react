import React from 'react';
import {Loader} from './loader.style';

/**
 * Function/Component: Displaying/hiding the loader
 * @param {Boolean} isvisible
 */
export const LoaderComponent = React.memo(({isvisible}) => {
  return isvisible && <Loader />;
});