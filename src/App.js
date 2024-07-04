import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { Route, Routes } from "react-router-dom";
import EditTodo from "./components/EditTodo";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <DataProvider>
      <div>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/addTodo" element={<TaskInput />} />

          <Route path="/edit" element={<EditTodo />} />

          <Route path="/todo/:id" element={<TaskItem />} />

         
        </Routes>
      </div>
    </DataProvider>
  );
};

export default App;