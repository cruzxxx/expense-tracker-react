import React, {useState} from "react";

import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onSelectYearDropdownHandler = (SelectedYear) => {
        setFilteredYear(SelectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectYearDropdown={onSelectYearDropdownHandler}/>
                {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount}
                                                         date={expense.date}/>)}
            </Card>
        </div>
    );
}

export default Expenses;