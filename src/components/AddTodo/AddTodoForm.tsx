import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

const Input = styled.input`
    width: 16.25rem;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ff476c;
`;

const InputBtn = styled.button`
    font-size: 20px;
    cursor: pointer;
    border: none;
`;

const InputForm = styled.form`
    display: flex;
    justify-content: center;
`;

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
            <Input type="text" value={newTodo} onChange={handleChange} />
            <InputBtn type="submit" onClick={handleSubmit}>
                <FiPlus />
            </InputBtn>
        </InputForm>
    )
}