import React from 'react';
import Albums from '../Albums';
import Pictures from '../Pictures';
import { connect } from 'react-redux';
import UserList from '../Users';

require("./styles.scss");

const Home = (props) => {
    return (
    <div className="container">
        <div className="albums">
            <Albums/>
        </div>
        <div className="main">
            {props.availablePictures ? <Pictures/> : <UserList/> }
        </div>
    </div>
    )
};

export const mapStateToProps = state => {
    return {
        availablePictures: state.albums && state.albums.some(album => album.checked === true)
    }
};

export default connect(
    mapStateToProps,
    null
)(Home);