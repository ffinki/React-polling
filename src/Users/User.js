import React from 'react';

const User = props => {

    return (
        <div className="card">
            <div className="content">
                <div className="header">{props.name}</div>
                <div className="meta">{props.email}</div>
                <div className="description">
                    <p>{props.address.street}</p>
                    <p>{props.address.suite}</p>
                    <p>{props.address.city}</p>
                    <p>{props.address.zipcode}</p>
                </div>
            </div>
        </div>
    )
}

export default User;