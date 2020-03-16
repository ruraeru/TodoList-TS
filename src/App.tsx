import React, { useState } from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { AddTodoForm } from './components/AddTodo/AddTodoForm';
import styled from 'styled-components';
import { Todo, ToggleTodo, AddTodo } from './components/TodoList/TodoListItem';

const Shadow = styled.div`
  width: 30rem;
  padding-top: 1rem;
  display: flex;
  padding-left: 1rem;
  flex-direction: column;
  box-shadow: 0 0.1857rem 0.375rem rgba(0,0,0,0.16), 0 1857rem 0.375rem rgba(0,0,0,0.23);
  border-radius: 0.625rem;
`;

const Outline = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      text: "투두리스트1",
      complete: true
    },
    {
      id: 1,
      text: "투두리스트2",
      complete: true
    },
    {
      id: 2,
      text: "투두리스트3",
      complete: false
    }
  ]);


  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <Outline>
      <Shadow>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </Shadow>
    </Outline>
  );
}

export default App;
