export default function courseReducers(state = [], action) {
    switch (action.type) {
        case "CREATE_COURSE":
            return [...state, Object.assign({}, action.course)];
        case "REMOVE_COURSE":
            return state.filter(course => course.title !== action.course.title);
        default:
            return state;
    }
}