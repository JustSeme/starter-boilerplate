import { addUserActionCreator } from "redux/actions/Clients"
import { clientsAPI } from "utils/api"

// Извините, но я ещё не изучал redux-saga, поэтому чтобы успеть завершить тестовое, решил сделать через redux-thunk

export const getUsers = () => async (dispatch) => {
    let data = await clientsAPI.getUsers()
    if (data.status === 200) {
        dispatch(addUserActionCreator(data.data))
    }
}