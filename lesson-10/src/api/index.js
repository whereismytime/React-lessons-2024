import axios from "axios";
import { API_URL } from "../contants";

export function getCards() {
	// return fetch(API_URL).then((response) => {
	// 	return response.json();
	// });

	return axios.get(API_URL);
}

export function deleteCards(id) {
	return axios.delete(API_URL + id);
}

export function createCards(body) {
	return axios.post(API_URL, body);
}
