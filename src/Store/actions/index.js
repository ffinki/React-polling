import { get } from "../../Services";
import { jsonPlaceholder } from "../../Utils/urls";

export const ACTION_TYPES = {
    POPULATE_ALBUMS: 'POPULATE_ALBUMS',
    SELECT_ALBUM: 'SELECT_ALBUM',
    POPULATE_PICTURES: 'POPULATE_PICTURES',
    UPDATE_ALBUM_PHOTOS: 'UPDATE_ALBUM_PHOTOS',
    CLEAR_ALBUM: 'CLEAR_ALBUM',
    POPULATE_USERS: 'POPULATE_USERS'
};

export const populateAlbums = (payload) => {
    return {
        type: ACTION_TYPES.POPULATE_ALBUMS,
        payload
    };
};

export const markAlbumAsChecked = (payload) => {
    return (dispatch) => {
        const {checked} = payload;
        dispatch({type: ACTION_TYPES.SELECT_ALBUM, payload});
        if (checked) {
            return dispatch(updateAlbumPhotos(payload));
        }
        else {
            return dispatch(clearAlbum(payload));
        }
    };
    
};

export const updateAlbumPhotos = (payload) => {
    return (dispatch) => {
        const {id} = payload;
        return get(`${jsonPlaceholder}photos?albumId=${id}`)
        .then(response => {
            const albumPictures = {id, pictures: response.data};
            return dispatch(populatePictures(albumPictures));
        },
        error => {
            console.log(error);
        });
    }
}

export const populatePictures = (payload) => {
    return {
        type: ACTION_TYPES.POPULATE_PICTURES,
        payload
    };
};

export const clearAlbum = (payload) => {
    return {
        type: ACTION_TYPES.CLEAR_ALBUM,
        payload
    };
};

export const populateUsers = (payload) => {
    return {
        type: ACTION_TYPES.POPULATE_USERS,
        payload
    };
};