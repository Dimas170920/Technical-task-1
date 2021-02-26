import React from "react"

const filterFunc = (arr, filter) => {
    console.log(filter)
    let filterArr = arr;

    if (!isEmpty(filter.name)) {
        filterArr = filterArr.filter(el => el.name.toLowerCase().startsWith(filter.name.toLowerCase()));
    }
    if (!isEmpty(filter.lastname)) {
        filterArr = filterArr.filter(el => el.lastname.toLowerCase().startsWith(filter.lastname.toLowerCase()));
    }

    if (!isEmpty(filter.age)) {
        filterArr = filterArr.filter(el => el.age === Number(filter.age));
    }
    if (filter.male) {
        filterArr = filterArr.filter(el => (el.sex === 'm'));
        if (filter.female) {
            filterArr = arr
        }
    }
    if (filter.female) {
        filterArr = filterArr.filter(el => (el.sex === 'f'));
        if (filter.male) {
            filterArr = arr
        }
    }
    return (filterArr)
};

function isEmpty(str) {
    return (!str || 0 === str.length);
}

export default filterFunc