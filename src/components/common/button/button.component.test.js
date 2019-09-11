import React from 'react';
import {shallow} from 'enzyme';
import {ButtonComponent} from './button.component';
import {Button} from './button.style';

const data = [];
const mockCall = jest.fn()

describe('Bar component rendering', () => {
  it('should render bar component', () => {
    const wrapper = shallow(<ButtonComponent data={data} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should check for child components rendering: when no data', () => {
    const wrapper = shallow(<ButtonComponent data={data} />);
    expect(wrapper.find(Button)).toHaveLength(0);
  });

  it('should check for child components rendering: when data is available', () => {
    data.push(12, 30);
    const wrapper = shallow(<ButtonComponent data={data} updateProgressValue={mockCall} />);
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});