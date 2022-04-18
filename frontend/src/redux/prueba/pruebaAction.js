import { PRUEBA_TYPE } from "./types";

export const createPrueba = () => {
	return {
		type: PRUEBA_TYPE,
        payload: 'esto es una prueba'
	}
}