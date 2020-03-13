import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const Input = styled.input `
`

const InputBtn = styled.button `

`

const InputForm = styled.form `
    display: flex;
    justify-content: center;
`

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    };
    
    return (
        <InputForm>
            {/* <input type="text" value={newTodo} onChange={handleChange}/> */}
            <Input type="text" value={newTodo} onChange={handleChange} />
            <InputBtn type="submit" onClick={handleSubmit}>
                AddTodo
            </InputBtn>
            {/* <button type="submit" onClick={handleSubmit}>
                Add Todo
            </button> */}
        </InputForm>
    )
}