import React from 'react';
import {shallow} from 'enzyme';
import {BarComponent} from './bar.component';
import {BarFilled, BarWrapper, BarWeight} from './bar.style';

const data = [];

describe('Bar component rendering', () => {
  it('should render bar component', () => {
    const wrapper = shallow(<BarComponent data={data} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should check for child components rendering: when no data', () => {
    const wrapper = shallow(<BarComponent data={data} />);
    expect(wrapper.find(BarFilled)).toHaveLength(0);
    expect(wrapper.find(BarWrapper)).toHaveLength(0);
    expect(wrapper.find(BarWeight)).toHaveLength(0);
  });

  it('should check for child components rendering: when data is available', () => {
    data.push({ id: 0, value: 123, percentValue: 20 });
    const wrapper = shallow(<BarComponent data={data} />);
    expect(wrapper.find(BarFilled)).toHaveLength(1);
    expect(wrapper.find(BarWrapper)).toHaveLength(1);
    expect(wrapper.find(BarWeight)).toHaveLength(1);
  });
});