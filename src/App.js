import React from "react";
import ToDoList from "./components/ToDoList";
import "./styles.css";
import { useSelector } from "react-redux";

const App = (props) => {
  const toDoList = useSelector((state) => state.toDoList);

  return (
    <div className="container">
      <h1 className="center blue-text">ToDo's ({toDoList.length})</h1>
      <ToDoList />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
//     toDoList: state.toDoList,
//   };
// };

export default App;
