import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
export default function ExpenseList(props) {
  if (props.itmes.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.itmes.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </ul>
  );
}
