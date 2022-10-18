import { ADD_USERS, DELETE_USER } from "redux/constants/Clients"

export const addUserActionCreator = (userData) => ({ type: ADD_USERS, payload: userData })
export const deleteUserActionCreator = (userId) => ({ type: DELETE_USER, payload: userId })