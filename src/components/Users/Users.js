import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const users = ({ users, loading }) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={ cardStyle }>
                { users.map( user => {
                    return <UserItem key={user.id} user={user} />
                })}
            </div>
        )
    }

}

const cardStyle = {
    display: 'grid',
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: '1rem'
}

export default users;
