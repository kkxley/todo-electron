import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Menu from './components/Menu';

export default function App(){
    return (
        <>
            <Header/>
            <TodoList/>
            <Menu/>
        </>
    )
}