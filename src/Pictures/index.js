import React from 'react';
import { connect } from 'react-redux';
import PicturesThumbs from './Pictures';

const Pictures = (props) => {
    if (!props.collection) {
        return null;
    }
    return (
        <div>
            {
                props.collection.map(album => {
                    if (!album.pictures) {
                        return null;
                    }
                    return (
                        <PicturesThumbs key={album.id} albumId={album.id} albumTitle={album.title} pictures={album.pictures}/>
                    )
                })
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        collection: state.albums !== null ? state.albums.filter(album => album.checked === true) : []
    }
}

export default connect(
    mapStateToProps,
    null
)(Pictures);