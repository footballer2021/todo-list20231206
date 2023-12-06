import Item from "./Item"
import { useTodos } from "../context/TodoProvider"

const List = () => {
  const todos = useTodos();
  return (
    <>
        {
            todos.map(todo => <Item key={todo.id} todo={todo}/>)
        }
    </>
  )
}

export default List