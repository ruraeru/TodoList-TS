import React from 'react'
import styled, { css } from 'styled-components';
import { MdClear } from 'react-icons/md';


export type Todo = {
    id?: number,
    text: string,
    complete: boolean;
};

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;


const None = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
`;

const TodoText = styled.div<{ done: boolean }>`
    color: white;
    display: flex;
    padding: 0.125rem;
    font-size: 1rem;
    height: 2rem;
    align-items: center;

    ${props =>
        props.done &&
        css`
      text-decoration: line-through;
      text-decoration-color: yellow;
      opacity: 0.7;
    `
    };
`;

// const Remove = styled.div`
//     color: #e64980;
//     font-size: 2rem;
//     display: flex;
//     align-items: center;
// `;


const Background = styled.div`
    border-radius: 0.3125rem;
    background: #4470ff;
    display: flex;
    width: 20rem;
    justify-content: space-between;

    svg {
        color: #e64980;
        font-size: 2rem;
    }
`;


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <None>
            <Background>
                <TodoText onClick={() => toggleTodo(todo)} done={todo.complete}>
                    {todo.text}
                </TodoText>
                    <MdClear />
            </Background>
        </None>
    )
}