import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    //Getting data from child component
    //enteredExpenseData is in the function submitHandler
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        //onAddExpense from parent component App.js
        props.onAddExpense(expenseData);
    };

    //the custom prop onSaveExpenseData receives data from ExpenseForm.js
    // onSaveExpenseDataHandler, which gets data from child component
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
};

export default NewExpense;