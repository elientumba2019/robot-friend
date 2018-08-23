import  { shallow } from 'enzyme';
import  React from 'react';
import MainPage from './MainPage'




let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        pending: false
    };


    wrapper = shallow(<MainPage {...mockProps}/>)
});


test("Testing main page component ", () => {
    expect(wrapper).toMatchSnapshot();
});


test('Filter robots perfectly', () => {
    expect(wrapper.instance().filterRobots([])).toEqual([]);



    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:3,
            name:'elie,',
            email:'elie@@lkdlfk,'

        }],
        searchField: 'a',
        pending: false
    };

    const wrapper2 = shallow(<MainPage {...mockProps2}/>);
    expect(wrapper2.instance().filterRobots([])).toEqual([]);
});