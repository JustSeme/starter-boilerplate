import { ADD_USERS, DELETE_USER, TOGGLE_IS_FETCHING } from "redux/constants/Clients"

const initState = {
    usersData: [],
    isFetching: false,
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
        case TOGGLE_IS_FETCHING: {
            if (state.isFetching) {
                return {
                    ...state,
                    isFetching: false
                }
            } else {
                return {
                    ...state,
                    isFetching: true
                }
            }
        }

        default:
            return state
    }
}

export default clients