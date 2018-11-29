import * as types from './actionTypes';
import activityApi from '../api/mockActivitiesApi';

export function loadActivitiesSuccess(activities) {
    return { type: types.LOAD_ACTIVITIES_SUCCESS, activities};
}

export function loadActivities() {
    return function (dispatch) {
        return activityApi.getAllActivities().then(activities => {
            dispatch(loadActivitiesSuccess(activities));
        }).catch(error => {
            throw (error);
        })
    }
}