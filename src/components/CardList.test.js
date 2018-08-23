import  { shallow } from 'enzyme';
import  React from 'react';
import CardList from './CardList'



test('Testing the Card Listcomponent', () => {
    const robots = [
        {
            id: 1,
            name: 'sanw',
            username:'jojo',
            email: 'jo@joj.com'
        }
    ]
    expect(shallow(<CardList robots={robots}/>)).toMatchSnapshot();
});