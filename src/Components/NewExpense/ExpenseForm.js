import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [eneteredAmount, setEnteredAmount] = useState("");
  const [eneteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHadler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHadler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHadler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: eneteredAmount,
      date: new Date(eneteredDate),
    };

    props.onSaveExpensedatahandler(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHadler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={eneteredAmount}
            onChange={amountChangeHadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={eneteredDate}
            onChange={dateChangeHadler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCencel}>
          Cencal
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
