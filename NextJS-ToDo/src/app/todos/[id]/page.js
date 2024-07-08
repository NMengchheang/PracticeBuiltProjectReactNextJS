import EditToDo from '@/components/ToDos/EditToDo'
import React from 'react'

async function getToDo(id) {
    const res = await fetch(
        `https://coding-fairy.com/api/mock-api-resources/1715945679/todos/${id}`,
        {
            cache : 'no-store'
        }
    );

    if(!res.ok) {
        throw new Error('Failed to update data!!')
    }

    const data = await res.json();
    return data;
}

export default async function EditToDoPage({params}) {
    const todoId = parseInt(params.id);
    const todo = await getToDo(todoId);
    
    return (
        <div>
            <h2>Edit-Form</h2>
            <EditToDo item={todo}/>
        </div>
    )
}
