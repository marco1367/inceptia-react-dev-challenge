import { GET_CASES_LIST } from "./types"
import axios from 'axios';

// export const setDates = (obj) => {
//     //obj: { token, id, date_Start, date_End }. para poder hacer la peticion.
//     return {
//         type: GET_CASES_LIST,
//         payload: obj
//     }
// }


export function GetCases( token, id, date_Start, date_End ) {
    return async function (dispatch) {
        return await axios.get(
            `https://admindev.inceptia.ai/api/v1/inbound-case/?client=${id}&local_updated__date__gte=${date_Start}&local_updated__date__lte=${date_End}`,
            {
                headers: {
                    authorization: `JWT ${token}`
                }
            }
        )
            .then(response => {
                dispatch({ type: GET_CASES_LIST, payload: response.data });
            })
            .catch((err) => {
                console.log(err)
            });
    };
}

export function GetNextCases( token, URL ) {
    console.log('token: ', token);//-------
    console.log(URL);//-----
    return async function (dispatch) {
        return await axios.get(
            URL,
            {
                headers: {
                    authorization: `JWT ${token}`
                }
            }
        )
            .then(response => {
                console.log('response: ', response);//------
                dispatch({ type: GET_CASES_LIST, payload: response.data });
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response)
            });
    };
}