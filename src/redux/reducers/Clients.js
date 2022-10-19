import { ADD_USERS, CHANGE_AVATAR, DELETE_USER, SET_PROFILE, TOGGLE_IS_FETCHING, TOGGLE_IS_FETCHING_PROFILE } from "redux/constants/Clients"

const initState = {
    usersData: [],
    profileData: {},
    isFetching: false,
    isFetchingProfile: false,
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
        case SET_PROFILE: {
            return {
                ...state,
                profileData: action.payload
            }
        }
        case TOGGLE_IS_FETCHING_PROFILE: {
            if (state.isFetchingProfile) {
                return {
                    ...state,
                    isFetchingProfile: false
                }
            } else {
                return {
                    ...state,
                    isFetchingProfile: true
                }
            }
        }
        case CHANGE_AVATAR: {
            return {
                ...state,
                profileData: { ...state.profileData, img: action.payload }
            }
        }

        default:
            return state
    }
}

export default clients