import "../../../src/index.css";
import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faPlus, faSun } from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { SET_VALUE } from "./types";
import { useContext } from "react";
import TodoWrapper from "./todoWrapper";
import ThemeContext from "../../themeContext";

const Todo = () => {
  const { theme, setTheme, colors } = useContext(ThemeContext);

  const toggle = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  const dispatch = useDispatch();

  const value = useSelector((state) => state.value);
  const data = useSelector((state) => state.tasks);

  // const {value, data} = useSelector(state => state);

  const typing = (event) => {
    const action = { type: SET_VALUE, payload: event.target.value };
    dispatch(action);
  };

  const add = () => {
    const action = { type: "ADD_TASK", payload: value };
    dispatch(action);
  };

  onkeydown = (event) => {
    if (event.keyCode == 13) add();
  };

  const deleteTask = (index) => {
    const action = { type: "DELETE_TASK", payload: index };
    dispatch(action);
  };

  const deleteAll = (index) => {
    const action = { type: "DELETE_ALL", payload: index };
    dispatch(action);
  };

  const editTask = (value, index) => {
    const action = { type: "EDIT_TASK", payload: { value, index } };
    dispatch(action);
  };

  const up = (index) => {
    const action = { type: "UP", payload: index };
    dispatch(action);
  };

  const down = (index) => {
    const action = { type: "DOWN", payload: index };
    dispatch(action);
  };

  const toggleCompleted = (index) => {
    console.log(index, "toggleCompleted");

    const action = { type: "TOGGLE_COMPLETED", payload: index };
    dispatch(action);
  };

  return (
    <TodoWrapper
      colors={colors}
      className="bg-white rounded p-3 shadow bg__todo"
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Todo App</h1>
        <Button className="icon" color={theme} onClick={toggle}>
          <FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} />
        </Button>
      </div>

      <div className="d-flex mb-2">
        <Input
          placeholder="new task"
          className="me-2 bg__input"
          value={value}
          onChange={typing}
        />
        <Button color="primary" onClick={add}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <ListGroup
        className="listgroup"
        style={{ minHeight: "200px", maxHeight: "320px", overflow: "auto" }}
      >
        {data?.map((value, index) => {
          return (
            <Item
              value={value}
              index={index}
              deleteTask={deleteTask}
              editTask={editTask}
              up={up}
              down={down}
              toggleCompleted={toggleCompleted}
            />
          );
        })}
      </ListGroup>
      <div className="pt-3 d-flex justify-content-between align-items-center">
        <h5>All {data.length}</h5>
        <Button className="fw-bold" onClick={() => deleteAll()} color="danger">
          Clear All
        </Button>
      </div>
    </TodoWrapper>
  );
};

export default Todo;
