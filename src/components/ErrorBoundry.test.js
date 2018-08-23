import React from 'react';
import { shallow } from 'enzyme';
import Error from './ErrorBoundry'


test('Testing the error boundary compoenent', () => {
   expect(shallow(<Error/>)).toMatchSnapshot() ;
});