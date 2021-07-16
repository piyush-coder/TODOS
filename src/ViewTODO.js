import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import Link from "@material-ui/core/Link";
import { useLocation, useHistory } from "react-router-dom";
import "./ViewTODO.css";

export default function ViewTODO(props) {
  const [todos, setTodos] = useState([]);
  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/50cc81bf-a1c5-416c-bbde-ee512b2cb50d")
      .then(function (response) {
        setTodos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const checkBoxAlter = function (selectedTodos) {
    const completedTodoIds = selectedTodos.selectionModel;
    setTodos(
      todos.map((todo) => {
        if (completedTodoIds.includes(todo.id)) {
          return {
            ...todo,
            status: "Completed",
          };
        }
        return {
          ...todo,
          status: "Pending",
        };
      })
    );
  };

  const redirection = () => {
    location.state = todos.filter((todo) => todo.status === "Completed");
    history.push("/completed-todo", location.state);
  };

  const columns = [
    { field: "title", headerName: "Todo Title", width: 150 },
    { field: "description", headerName: "Todo Description", width: 400 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "endTime",
      headerName: "Created On",
      type: "date",
      width: 200,
    },
    {
      field: "helpRequired",
      headerName: `Discussion Needed?`,
      width: 250,
    },
  ];

  return (
    <div className="main-body">
      <Link
        component="button"
        variant="body2"
        onClick={redirection}
        className="link"
      >
        Completed TODOS
      </Link>
      <DataGrid
        rows={todos}
        columns={columns}
        pagination
        checkboxSelection
        pageSize={5}
        onSelectionModelChange={checkBoxAlter}
        loading={todos.length === 0}
      />
    </div>
  );
}
