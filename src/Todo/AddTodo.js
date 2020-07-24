import React, {useState} from "react"
import PropTypes from "prop-types"

//my own hook
function useInputValue(defaultValue = ""){
  const [value, setValue] = useState(defaultValue)

  return {
    bind:{
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(""),
    value: () => value
  }
}

function AddTodo({ onCreate }){

  const input = useInputValue("")

  function submitHandler(event){
    event.preventDefault()

    if(input.value().trim()){
      onCreate(input.value())
      input.clear()
      // setValue("")
    }
  }

  return (
    <form className="addTodoForm" onSubmit={submitHandler}>
      <input className="addTodoInput" {...input.bind}/>
      <button type="submit" className="addTodoBtn">Add todo</button>
    </form>
  )

}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo