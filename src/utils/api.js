import axios from "axios"

export const clientsAPI = {
    getUsers() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }
}