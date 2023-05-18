import React, {useEffect, useState} from "react";

export const Todos = () => {
    const [ todos, setTodos] = useState([])
    const url =  'https://jsonplaceholder.typicode.com/todos';
    const requestOption = { method: 'GET'}

    const getTodos = async () => {
        const response = await fetch(url, requestOption);
        if (response.ok) {
            const data = await response.json();
            setTodos(data)
        } else {
            console.log('error: ', response.status)
        }
    }

    useEffect( () =>{
        getTodos();
    }, [])

    return (
        <div>
            <h1>Lista de ToDos</h1>
            {!todos ? 'Cargando ..................................................' :
                todos.map((todo, index) => {
                return <li key={index} className="list-group-item">
                  {todo.id} - {todo.title} - user_{todo.userId} - {todo.completed ? "Terminada" : "Pendiente"}
                </li>
            })}
        </div>
)
}
