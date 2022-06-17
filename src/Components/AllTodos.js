import React from 'react'

const AllTodos = ({todos,handleEdit,handleDelete}) => {
  return (
    <ul className="allTodo">
          {todos.map((t) => (
            <li className="singletodo">
              <span className="todotext">{t.todo}</span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
  )
}

export default AllTodos