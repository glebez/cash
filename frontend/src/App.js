import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from './actions';
import NewTransactionForm from './components/newTransactionForm';
import TransactionsList from './components/transactionsList';
import './scss/main.scss';

class App extends Component {
	componentDidMount () {
		this.props.dispatch(fetchTransactions());
	}
  render() {
    return (
      <div>
				<NewTransactionForm />
				<hr/>
				<TransactionsList />
      </div>
    );
  }
}

export default connect()(App);
