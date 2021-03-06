import React from 'react';
import AddCategory from './component/AddCategory';
import CategoryList from './component/CategoryList';
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';


const App = () => (
  <div className="start-screen-container m-4">
    <div className="row header">
      <div className="col-6">
        <h1>ToDoList Second Try</h1>
      </div>
     </div>
     <div className="row">
      <div className="col-6 categories">
        <AddCategory />
        <CategoryList />
       </div>
       <div className="col-6 task"> 
        <AddTodo />
        <TodoList />
      </div>
     </div>
  </div>
);

export default App;
