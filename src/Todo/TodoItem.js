import React, {useContext} from "react"
import PropTypes from "prop-types"
import Context from "../context"

function TodoItem({todo, index, onChange}){
  const {removeTodo} = useContext(Context)
  const classes=[]

  if (todo.completed){
    classes.push("done")
  }

  return (
    <li className="list-item">
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          className="input"
          onChange={()=>{ onChange(todo.id)}}
        />
        <strong className="index">{index+1}</strong>
        {todo.title}
      </span>
      <button className="remove-button" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem