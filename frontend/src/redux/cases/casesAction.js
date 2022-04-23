import { SET_DATES } from "./types"

export const setDates = (objDates) => {
	return {
		type: SET_DATES,
        payload: objDates
	}
}