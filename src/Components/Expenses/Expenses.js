import React from 'react';
import  './Expenses.css';

import ExpenseItem  from "./ExpenseItem.js";
import Card from '../UI/Card.js';
 

const Expenses = (props) => {
    
    return(
    
     <Card className='expenses'>
        <h2 style={{ color:'white',textAlign:"center",fontFamily:'sans-serif' }}>Expense List</h2>
        {
            props.item.map( 
                expense => (
                <ExpenseItem 
                key={expense.id}
                date={expense.date} 
                title={expense.title}
                amount={expense.amount} />
            )
            )
        }
     </Card>
    );
}

export default Expenses;