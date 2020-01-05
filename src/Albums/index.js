import React from 'react';
import { get } from '../Services';
import { jsonPlaceholder } from '../Utils/urls';
import { markAlbumAsChecked, populateAlbums } from '../Store/actions';
import { connect } from 'react-redux';

require('./styles.scss');

class Albums extends React.Component {

    componentDidMount() {
        get(`${jsonPlaceholder}albums`).then(
            response => {
                this.props.populateAlbums(response.data);
            },
            error => {
                console.log(error.message);
            }
        )
    }

    handleChange = (e, id) => {
        this.props.markAlbumAsChecked({id, checked: e.target.checked});
    }

    renderAlbums() {
        return this.props.albums.map(album => {
            const {id, title} = album;
            return (
                <li key={id}>
                    {title}
                    <input type="checkbox" onChange={e => this.handleChange(e, id)}/>
                </li>
            );
        });
    }
    
    render() {
        if (this.props.albums === null) {
            return null;
        }
        return <ul>{this.renderAlbums()}</ul>
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums
    }
}

const mapDispatchToProps = {
    populateAlbums,
    markAlbumAsChecked
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Albums);