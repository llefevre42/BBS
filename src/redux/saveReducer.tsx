import { SAVE_PLANET } from './ActionTypes';
const INITIAL_STATE = { planet: [] };
const saveReducer = (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case SAVE_PLANET:
            return { planet: action.payload };
        default:
            return state;
    }
};
export default saveReducer;