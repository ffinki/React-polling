import React from 'react';
import User from './User';

const Users = props => {

    const renderUsers = () => {
        return props.users.map(user => <User key={user.id} name={user.name} email={user.email} address={user.address}/>);
    }

    return (
        <div className="ui cards">
            {renderUsers()}
        </div>
    )
}

export default Users;