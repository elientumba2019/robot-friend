import * as actions from './actions'
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';


const mockStore = configureStore([
    thunkMiddleware
]);

test('Should create an action to search robots ', () => {
    const text = 'woo';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
});



test('Handles the changing request robot api', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    };
    expect(actions[0]).toEqual(expectedAction);
});












