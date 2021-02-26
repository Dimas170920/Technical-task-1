import React from "react"
import style from "./Filter.css"
import {useForm} from 'react-hook-form';
import {addFilter} from "../redux/filter-reducer";
import {compose} from "redux";
import {connect} from "react-redux";

const Filter = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        props.addFilter(data)
    }

    if (errors) {
        console.log(errors)
    }
    return (<div>
            <form onChange={handleSubmit(onSubmit)}>
                <div><input placeholder="Name" name="name" ref={register}/></div>
                <div><input type="text" placeholder="Lastname" name="lastname" ref={register}/></div>
                <div><input type="text" placeholder="Age" name="age" ref={register}/></div>
                <div>
                    M<input type="checkbox" placeholder="Male" name="male" ref={register}/>
                    F<input type="checkbox" placeholder="Female" name="female" ref={register}/>
                </div>

            </form>


        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        filter: state.filterPage.filter
    }
}

export default compose(
    connect(mapStateToProps, {addFilter})
)(Filter)