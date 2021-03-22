import React, { useRef } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

const AddForm = (props) => {
  const refContainer = useRef(null);
  // const newToDo = useSelector((state) => state.newToDo); //same as mapStateToProps

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    newToDo({ content: refContainer.current.value });
    refContainer.current.value = "";
  };

  const newToDo = (content) => {
    return dispatch({ type: "NEW_TO_DO", payload: content });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type="text" ref={refContainer} />
      </form>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     newToDo: (content) => {
//       dispatch({ type: "NEW_TO_DO", payload: content });
//     },
//   };
// };

export default AddForm;
