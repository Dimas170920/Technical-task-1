import React from "react"
import filterFunc from "./FilterFunc";

const Profile = (props) => {

    return<div>

        {filterFunc (props.users,props.filter).map(u => <div >
            <div>-------------</div>
            <div>{u.name}</div>
            <div>{u.lastname}</div>
            <div>{u.age}</div>
            <div>{u.sex}</div>
        </div> )}

        </div>

}


export default Profile