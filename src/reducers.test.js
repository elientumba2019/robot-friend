import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';


describe('Search robots', () => {

    const initialStateSearch = {
        'searchField': ''
    }

    test('Should return the initial state ', () => {
        // for nothing
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''});
    });


    test('Should Handle CHANGE_SEARCHFIELD', () => {
        // for nothing
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        });
    })
});




describe('Request Robot reducers', () => {
    const initialStateRobot = {
        robots: [],
        isPending: false
    };


    test('Shoud return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobot);
    });



    test('handle pending state action', () => {
        expect(reducers.requestRobots(initialStateRobot, {
            type: REQUEST_ROBOTS_PENDING,
            payload: {isPending: true}
        })).toEqual({
            robots: [],
            isPending: true
        })
    });




    test('handle success action', () => {
        expect(reducers.requestRobots(initialStateRobot, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [
                {
                    id: 1234, name:'test', email:'popopo@popo.com'
                }
            ]
        })).toEqual({
            robots: [ {
                id: 1234, name:'test', email:'popopo@popo.com'
            }],
            isPending: false
        })
    });





    test('handle pending state action', () => {
        expect(reducers.requestRobots(initialStateRobot, {
            type: REQUEST_ROBOTS_FAILED ,
            payload: 'NOOOOOOOOOOOOOOOOO'
        })).toEqual({
            error: 'NOOOOOOOOOOOOOOOOO',
            robots: [],
            isPending: false
        })
    });
});








