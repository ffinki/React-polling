import React, { useEffect } from 'react';
import Picture from './Picture';
import { updateAlbumPhotos } from '../Store/actions';
import { connect } from 'react-redux';

const PicturesThumbs = props => {

    useEffect(() => {
        const intervalId = setInterval(updateAlbum, 10000);
        return () => {
            clearInterval(intervalId);
        }
    });

    const updateAlbum = () => {
        props.updateAlbumPhotos({id: props.albumId});
    }

    const renderPictures = () => {
        return props.pictures.map(picture => <Picture key={picture.id} thumbnailUrl={picture.thumbnailUrl} title={picture.title}/>);
    }

    return (
        <div>
            <h1>{props.albumTitle}</h1>
            <div className="ui grid">
                {renderPictures()}
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    updateAlbumPhotos
}

export default connect(
    null,
    mapDispatchToProps
)(PicturesThumbs);