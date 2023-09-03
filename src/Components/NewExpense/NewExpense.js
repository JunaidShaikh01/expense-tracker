import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
export default function NewExpense(props) {
  const saveExpensedatahandler = (enteredExpense) => {
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    const expenseData = {
      ...enteredExpense,
      id: randomNumber.toString(),
    };
    props.onAddExchange(expenseData);
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  function showForm() {
    setIsEditing(true);
  }
  function hideForm() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showForm}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpensedatahandler={saveExpensedatahandler}
          onCencel={hideForm}
        />
      )}
    </div>
  );
}
