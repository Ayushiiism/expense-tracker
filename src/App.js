import React from 'react';
import { Headers } from './components/Headers';
import { Balance } from './components/Balance';
import { IncomeExpanses } from './components/IncomeExpanses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  
  return (
    <GlobalProvider >
      <div className="container">
        <Headers />
        <Balance />
        <IncomeExpanses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
