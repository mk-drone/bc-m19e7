import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export const addComment = (text) => {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4(),
    };
}

export const editComment = (id, text) => {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id,
    }
}

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        id: id,
    };
}

export const thumbUp = (id) => {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
    };
}

export const thumbDown = (id) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
    };
}