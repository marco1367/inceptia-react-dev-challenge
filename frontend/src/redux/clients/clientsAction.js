import { GET_CLIENTS } from "./types";
import axios from 'axios';


export function GetClients(token) {
    return async function (dispatch) {
        return await axios.get(`https://admindev.inceptia.ai/api/v1/clients/`,
            {
                headers: {
                    authorization: `JWT ${token}`
                }
            }
        )
            .then(response => {
                // console.log(`response: `, response);//-----
                dispatch({ type: GET_CLIENTS, payload: response.data });
            })
            .catch((err) => {
                // dispatch({ type: USER_INIT_AUTH_TOKEN, payload: err.response });
                console.log(`err: `, err)
            });
    };
}
