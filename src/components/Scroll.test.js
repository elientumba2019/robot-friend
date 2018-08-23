import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll'


/**
 * card component test for rendering
 */
test('Testing Scroll component ', () => {
    expect(shallow(<Scroll/>)).toMatchSnapshot();
})
