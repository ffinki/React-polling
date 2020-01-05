import React, { useEffect } from 'react';
import { get } from '../Services';
import { jsonPlaceholder } from '../Utils/urls';
import { populateUsers } from '../Store/actions';
import { connect } from 'react-redux';
import Users from './Users';

const UserList = props => {

    useEffect(() => {
        const intervalId = setInterval(getUsers, 4000);
        return () => {
            clearInterval(intervalId);
        }
    });

    const getUsers = () => {
        get(`${jsonPlaceholder}users`).then(response => {
            props.populateUsers(response.data);
        });
    }

    if (!props.users) {
        return null;
    }

    return <Users users={props.users}/>
}

export const mapDispatchToProps = {
    populateUsers
};

export const mapStateToProps = state => {
    return {
        users: state.users
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);