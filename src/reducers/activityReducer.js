export default function activityReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_ACTIVITY':
            return [...state, Object.assign({}, action.activity)];
        default:
            return state;
    }
}