import React from 'react'
import "./TodoListItem.css";
import styled from 'styled-components';
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

const Label = styled.label`
    display: flex;
`;

const CheckBox = styled.input`
    opacity: 0;
`;

const TodoText = styled.div`
    color: white;
    background: #4470ff;
    display: flex;
    padding: 0.125rem;
    font-size: 1rem;
    height: 2rem;
    align-items: center;
`;

const Remove = styled.div`
    color: #e64980;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;


const Background = styled.div`
    border-radius: 0.3125rem;
    background: #4470ff;
    display: flex;
    width: 20rem;
    justify-content: space-between;
`;


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
};

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <None>
            <Background>
                <Label className={todo.complete ? "complete" : undefined}>
                    <CheckBox
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => toggleTodo(todo)}
                    />
                    <TodoText>
                        {todo.text}
                    </TodoText>
                </Label>

                <Remove onClick={e => {
                    e.stopPropagation();
                    // onRemove(id);
                }}>
                    <MdClear font-size="1.5rem" />
                </Remove>
            </Background>
        </None>
    )
}