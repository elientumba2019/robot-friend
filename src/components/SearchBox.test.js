import React from 'react';
import { shallow } from 'enzyme';
import Search from './SearchBox'



test("Testin the seach box component ", () => {
    expect(shallow(<Search/>)).toMatchSnapshot();
});