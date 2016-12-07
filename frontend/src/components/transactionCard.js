import React, { PropTypes } from 'react';

const TransactionCard = ({ sum, description, category }) => (
	<div className='transaction-card'>
		<div className='transaction-card__top'>
			<h1 className='transaction-card__title'>{sum}</h1>
		</div>
		<div className='transaction-card__bottom'>
			<h2 className='transaction-card__category'>{category}</h2>
			<p className='transaction-card__description'>{description}</p>
		</div>
	</div>
);

TransactionCard.propTypes = {
  sum: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
	description: PropTypes.string
};

export default TransactionCard;
