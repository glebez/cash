import { handleServerError } from '../utils/index.js';

export const addTransaction = (transaction) => {
  return {
    type: 'ADD_TRANSACTION',
		payload: transaction
  }
}

export const receiveTransactions = (json) => {
  return {
    type: 'RECEIVE_TRANSACTIONS',
		payload: {
			transactions: json
		}
  }
}

export function postTransaction(transaction) {
	return dispatch => {
    return fetch('/api/new', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(transaction)
		})
      .then(response => {
				return response.json();
			})
      .then(json => {
				handleServerError(json);
				dispatch(addTransaction(json))
			});
  }
}

export function fetchTransactions() {
  return dispatch => {
    return fetch(`/api`)
      .then(response => response.json())
      .then(json => {
				handleServerError(json)
				dispatch(receiveTransactions(json))
			});
  }
}
