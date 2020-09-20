import { READ_PROPERTY_DATA, JSON_DATA } from '../Utilities/AppConstants'


export const getPropertyData = () => dispatch => {
    fetch(JSON_DATA)
        .then(response => response.json())
        .then(response => {
            dispatch({ type: READ_PROPERTY_DATA, payload: response })
        })
        .catch(err => dispatch({ type: READ_PROPERTY_DATA, payload: [] }));
}