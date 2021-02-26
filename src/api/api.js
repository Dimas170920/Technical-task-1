import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://venbest-test.herokuapp.com/',

})

export const usersAPI = {
    getUsers() {
        return instance.get()
            .then(response => response.data);
    }
}