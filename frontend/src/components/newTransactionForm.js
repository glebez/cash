import React from 'react';
import { connect } from 'react-redux';
import { postTransaction } from '../actions';

let NewTransactionForm = (props) => {
		let sum, description, category;
		const onSubmit = (e) => {
			e.preventDefault();
			const payload = {
				sum: sum.value,
				description: description.value,
				category: category.value
			};
			props.dispatch(postTransaction(payload));
		};

    return (
      <div>
				<form className="new-trans-form" onSubmit={onSubmit}>
					<div className="form-group">
						<label htmlFor="transactionSum">Sum</label>
						<input
							className="form-control"
							id="transactionSum"
							ref={node => {
			          sum = node
			        }}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="transactionDescription">Description</label>
						<textarea
							className="form-control"
							name="transactionDescription"
							id="transactionDescription"
							cols="30"
							rows="5"
							ref={node => {
			          description = node
			        }}>
						</textarea>
					</div>
					<div className="form-group">
						<label htmlFor="transactionCategory">Category</label>
						<input
							className="form-control"
							id="transactionCategory"
							ref={node => {
			          category = node
			        }}
						/>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
      </div>
    );
}

NewTransactionForm = connect()(NewTransactionForm);

export default NewTransactionForm;
