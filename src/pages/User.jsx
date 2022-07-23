import React from 'react'
import UserAdd from '../components/UserAdd'
import UserEdit from '../components/UserEdit'
import UsersView from '../components/UsersView'
import UserViewID from '../components/UserViewID'

const User = () => {
    return (
        <>
            <UsersView />
            <UserViewID />
            <UserAdd />
            <UserEdit />
        </>
    )
}

export default User