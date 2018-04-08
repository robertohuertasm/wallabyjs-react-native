import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Intro from './Intro';

describe('Intro tests', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Intro />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });
});
