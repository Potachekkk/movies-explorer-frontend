import { MOVIES_BASE_URL } from "./constant";

export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export const getMovies = () => {
    return fetch(`${MOVIES_BASE_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => checkResponse(res))
}