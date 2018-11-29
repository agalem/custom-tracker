import * as types from '../actions/actionTypes';

export default function activityReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_ACTIVITIES_SUCCESS:
            return action.activities;
        default:
            return state;
    }
}