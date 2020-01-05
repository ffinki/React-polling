import _ from 'lodash';

import { combineReducers } from "redux";
import { ACTION_TYPES } from "../actions";

const populateAlbums = (state = null, action = {}) => {
    const { id } = action.payload ? action.payload : {payload: {}};
    switch (action.type) {
        case ACTION_TYPES.POPULATE_ALBUMS: 
            return action.payload;
        case ACTION_TYPES.SELECT_ALBUM:
            const { checked } = action.payload;
            return state.map(album => {
                if (album.id === id) {
                    return {...album, ...{checked}};
                }
                return album;
            });
        case ACTION_TYPES.POPULATE_PICTURES:
            const {pictures} = action.payload;
            return state.map(album => {
                if (album.id === id) {
                    return {...album, ...{pictures}};
                }
                return album;
            });
        case ACTION_TYPES.CLEAR_ALBUM:
            return state.map(album => {
                if (album.id === id) {
                    return _.omit(album, 'pictures');
                }
                return album;
            })
        default:
            return state;
    }
};

const populateUsers = (state = null, action = {}) => {
    switch(action.type) {
        case ACTION_TYPES.POPULATE_USERS:
            return action.payload;
        default:
            return state;
    }
};


export default combineReducers({
    albums: populateAlbums,
    users: populateUsers
});