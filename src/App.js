import React, { useState } from 'react';

import Expenses from './Components/Expenses/Expenses';

import NewExpense from './Components/NewExpense/NewExpense';

let Dummy_Expenses = [];

const App = () => {

  const [expenses , setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense , ...expenses]
       setExpenses(updatedExpense);
  };
 
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses item={expenses}/>
    </div>
  );
}

export default App;
