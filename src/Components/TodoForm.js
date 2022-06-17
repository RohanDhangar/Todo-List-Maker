import React from 'react'

const TodoForm = ({handleSubmit,todo,editId,setTodo}) => {
  return (
    <form className="todoform" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{editId ? "Edit" : "Add"}</button>
        </form>
  )
}

export default TodoForm