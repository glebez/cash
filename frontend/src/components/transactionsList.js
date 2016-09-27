import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TransactionCard from './transactionCard';

let TransactionsList = (props) => {
	const transactions = props.transactions || [];
  return (<div>
    {transactions.map(transaction =>
      <TransactionCard
        {...transaction}
      />
    )}
  </div>)
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

TransactionsList = connect((state) => (state))(TransactionsList);

export default TransactionsList;
