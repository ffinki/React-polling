import React from 'react';

const Picture = props => {
    return <img className="ui image" src={props.thumbnailUrl} alt={props.title}/>
};

export default Picture;