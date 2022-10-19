import { ADD_USERS, DELETE_USER, TOGGLE_IS_FETCHING } from "redux/constants/Clients"

export const addUserActionCreator = (userData) => ({ type: ADD_USERS, payload: userData })
export const deleteUserActionCreator = (userId) => ({ type: DELETE_USER, payload: userId })
export const toggleIsFetchingActionCreator = () => ({ type: TOGGLE_IS_FETCHING })