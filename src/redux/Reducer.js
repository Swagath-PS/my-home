import { READ_PROPERTY_DATA } from '../Utilities/AppConstants'

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case READ_PROPERTY_DATA:
            console.log(action.payload)
            return {
                ...state,
                data: action.payload,

            };
        default:
            return state;

    }
}