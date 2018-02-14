import {ADD_COMMENT,DELETE_COMMENT,EDIT_COMMENT,THUMB_DOWN_COMMENT,THUMB_UP_COMMENT} from './actions';

function comments(state=[], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0,
            },
            ...state ];
        case DELETE_COMMENT:
            return state.filter(val => val.id !== action.id);
        case EDIT_COMMENT:
            return state.map((val, key) => {
                if(val.id === action.id){
                    val.text = action.text;
                }
                return val;
            });
        case THUMB_DOWN_COMMENT:
            return state.map((val, key) => {
                if(val.id === action.id){
                    val.votes--;
                }
                return val;
            });
        case THUMB_UP_COMMENT:
            return state.map((val, key) => {
                if(val.id === action.id){
                    val.votes++;
                }
                return val;
            });
        default:
            return state;
    }
}

export default comments;