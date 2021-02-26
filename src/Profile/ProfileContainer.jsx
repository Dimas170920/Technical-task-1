import React from "react"
import {requestUsers} from "../redux/users-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";


const ProfileContainer = (props) => {

    if (!props.users.length) {
        props.requestUsers();
    }

    return <Profile users={props.users} filter={props.filter}/>

}

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        filter: state.filterPage.filter
    }
}

export default compose(
    connect(mapStateToProps, {requestUsers})
)(ProfileContainer)