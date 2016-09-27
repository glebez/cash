const transaction = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return action.payload;

    default:
      return state
  }
}

const transactions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        ...state,
        transaction(undefined, action)
      ];

		case 'RECEIVE_TRANSACTIONS':
			return action.payload.transactions;

    default:
      return state;
  }
}

export default transactions;
