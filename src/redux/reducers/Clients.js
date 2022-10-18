import { ADD_USERS, DELETE_USER } from "redux/constants/Clients"

const initState = {
    usersData: []
}


const clients = (state = initState, action) => {
    switch (action.type) {
        case ADD_USERS: {
            return {
                ...state,
                usersData: [...state.usersData, ...action.payload]
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                usersData: state.usersData.filter(item => item.id !== action.payload),
            }
        }

        default:
            return state
    }
}

export default clients