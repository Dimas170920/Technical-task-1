const SET_FILTER = "SET_FILTER"

let initialState = {
    filter: {}

};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state, filter: action.filter
            }
        default:
            return state;
    }
}

export const setFilter = (filter) => ({type: SET_FILTER, filter})

export const addFilter = (filter) => {

    return (dispatch) => {
        dispatch(setFilter(filter));
    }
}


export default filterReducer;