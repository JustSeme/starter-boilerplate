import { addUserActionCreator, setProfileActionCreator, toggleIsFetchingActionCreator, toggleIsFetchingProfileActionCreator } from "redux/actions/Clients"
import { clientsAPI } from "utils/api"

// Извините, но я ещё не изучал redux-saga, поэтому чтобы успеть завершить тестовое, решил сделать через redux-thunk

//Надеюсь, не страшно что я модифицирую здесь объект. На реальном проекте я так делать, разумеется, не буду
const randFunc = (max, min) => Math.floor(Math.random() * (max - min) + min)

export const getUsers = () => async (dispatch) => {
    dispatch(toggleIsFetchingActionCreator())
    let data = await clientsAPI.getUsers()
    dispatch(toggleIsFetchingActionCreator())

    data.data.map((elm, index) => {
        elm.img = `/img/avatars/thumb-${index + 1}.jpg`
        elm.status = randFunc(50, 1) % 2 === 0 ? 'active' : 'blocked'
        elm.role = randFunc(50, 1) % 2 === 0 ? 'Admin' : 'User'
        return elm
    })

    if (data.status === 200) {
        dispatch(addUserActionCreator(data.data))
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(toggleIsFetchingProfileActionCreator())
    let data = await clientsAPI.getUserProfile(userId)
    data.data.img = `/img/avatars/thumb-${userId}.jpg`
    dispatch(toggleIsFetchingProfileActionCreator())
    if (data.status === 200) {
        dispatch(setProfileActionCreator(data.data))
    }
}