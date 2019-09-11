import React, { useState, useEffect } from 'react';
import { setProgressBarData, updateSelectedBarData } from '../../effects/data';
import {BAR_WIDTH} from '../../constants/data';
import { BarComponent } from '../common/bar/bar.component';
import {LoaderComponent} from '../common/loader/loader.component';
import FilterComponent from './filter/filter.component';
import { getProgressBarData } from './home.service';
import { Container, Title, ErrorTitle } from './home.style';

/**
 * HomeComponent: Parent container of the application
 */
export default function HomeComponent() {
  /** state data(buttons): responsible for holding and updating buttons data */
  const [buttons, setButtons] = useState([]);
  /** state data(bars): responsible for holding and updating progress bar data */
  const [bars, setBars] = useState([]);
  /** state data(limit): responsible for holding and updating the progress bar limit */
  const [limit, setLimit] = useState([]);
  /** state data(selectedBar): responsible for holding and updating selected progress bar's data */
  const [selectedBar, setSelectedBar] = useState('');
  /** state data(isLoaderVisible): responsible for holding and updating loader's visibility */
  const [isLoaderVisible, setLoaderVisibility] = useState(true);
  /** state data(isLoaderVisible): responsible for holding and updating loader's visibility */
  const [isError, setErrorStatus] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container width={BAR_WIDTH}>
      <Header title="Progress Bars Demo" />
      <LoaderComponent isvisible={isLoaderVisible} />
      {!isLoaderVisible && !isError && (
        <>
          <BarComponent data={bars} width={BAR_WIDTH} />
          <FilterComponent
            btnData={buttons}
            selectData={bars}
            setSelectedData={setSelectedData}
            selectedBar={selectedBar}
            updateProgressValue={updateProgressValue} 
          />
        </>
      )}

      {isError && <Error title="Error while data fetch. Please try again." />}
      
    </Container>
  );

  /**
   * Function for getting/fetching the progress bar's and related data from server
   */
  async function getData() {
    try {
      const data = await getProgressBarData();
      const updatedData = await setProgressBarData(data);
      const { barData, buttons, limit } = updatedData;
      setButtons(buttons);
      setBars(barData);
      setSelectedBar(prev => barData.length ? barData[0].id : prev);
      setLimit(limit);
      setLoaderVisibility(false);
    } catch {
      setLoaderVisibility(false);
      setErrorStatus(true);
    }
  }

  /**
   * Function setting the selected progress bar's value
   * @param {string} data 
   */
  function setSelectedData(data) {
    setSelectedBar(data);
  }

  /**
   * Function updating the progress bar's data for the selected progress bar(along with the selected button's value)
   * @param {string} value 
   */
  async function updateProgressValue(value) {
    const updatedData = await updateSelectedBarData(bars, selectedBar, value, limit);
    setBars(updatedData);
  }
};

/**
 * Function/Component rendering/displaying the application's title
 */
const Header = React.memo(({ title }) => (
  <Title>{title}</Title>
));

/**
 * Function/Component rendering/displaying the error status(if found)
 */
const Error = React.memo(({ title }) => (
  <ErrorTitle>{title}</ErrorTitle>
));