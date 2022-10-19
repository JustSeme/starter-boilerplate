import { ADD_USERS, CHANGE_AVATAR, DELETE_USER, SET_PROFILE, TOGGLE_IS_FETCHING, TOGGLE_IS_FETCHING_PROFILE } from "redux/constants/Clients"

export const addUserActionCreator = (userData) => ({ type: ADD_USERS, payload: userData })
export const deleteUserActionCreator = (userId) => ({ type: DELETE_USER, payload: userId })
export const toggleIsFetchingActionCreator = () => ({ type: TOGGLE_IS_FETCHING })
export const setProfileActionCreator = (profile) => ({ type: SET_PROFILE, payload: profile })
export const toggleIsFetchingProfileActionCreator = () => ({ type: TOGGLE_IS_FETCHING_PROFILE })
export const changeAvatarActionCreator = (file) => ({ type: CHANGE_AVATAR, payload: file })