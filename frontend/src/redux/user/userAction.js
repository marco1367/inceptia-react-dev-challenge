import { USER_LOG_IN, USER_LOG_OUT } from "./types"

export const UserLogIn = (data) => {
	return {
		type: USER_LOG_IN,
        payload: data
	}
}

export const UserLogOut = () => {
	return {
		type: USER_LOG_OUT,
	}
}