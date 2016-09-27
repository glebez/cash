import React, { PropTypes } from 'react';

const TransactionCard = ({ sum, description, category }) => (
	<div>
		<h1>Transaction</h1>
		<h2>{sum}</h2>
		<p>{category}</p>
		<p>{description}</p>
	</div>
);

TransactionCard.propTypes = {
  sum: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
	description: PropTypes.string
};

export default TransactionCard;
