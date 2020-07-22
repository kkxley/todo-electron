import React from 'react';
import {Container, List } from '@material-ui/core';
import TodoListItem from './components/TodoListItem';

const todolist = [
    {
        id: 1,
        title: 'Посмотреть youtube',
        date: '14/06/2020',
        priority: 'high',
        isDone: true
    },
    {
        id: 2,
        title: 'Поесть',
        date: '14/06/2020',
        priority: 'low',
        isDone: false
    },
    {
        id: 3,
        title: 'Выпить кофе',
        date: '13/06/2020',
        priority: 'medium',
        isDone: false
    }
];

export default function TodoList(){
    return (
        <Container className='todo-list'>
            <List>
                {
                    todolist.map(
                        items => (
                            <TodoListItem key={items.id} {...items}/>
                        )
                    )
                }
            </List>
        </Container>
    )
}