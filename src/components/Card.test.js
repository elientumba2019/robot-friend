import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card'


/**
 * card component test for rendering
 */
test('Testing Card component ', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
})
