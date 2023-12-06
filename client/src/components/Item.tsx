import { useState } from 'react'
import todoApi from '../api/todoApi'
import { Data } from '../type/DataType'
import { useTodos, useDispatch } from '../context/TodoProvider'

const Item = ({todo}:{todo:Data}) => {
  const [editContent, setEditContent ] = useState(todo.content);
  const todos = useTodos();
  const dispatch = useDispatch();

  const toggleEditMode = () => {
    const newTodo = {...todo, editing: !todo.editing};
    todoApi.update(newTodo).then(result => {
        dispatch({type:'todo/update', todo:result, todos})
    });
  }

  const editComplete = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {...todo, content:editContent, editing: !todo.editing};
    todoApi.update(newTodo).then(result => {
        dispatch({type:'todo/update', todo:result, todos})
    });
  }

  const complete = (todo:Data) => {
    todoApi.delete(todo).then(() => {
        dispatch({type:'todo/delete', todos, todo});
    })
  };

  return (
    <div>
        <button onClick={() => complete(todo)}>完了</button>
        <form style={{display:'inline'}} onSubmit={editComplete}>
        {
            todo.editing ?
            <input 
                type='text'
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
            /> :
            <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        }
        </form>
    </div>
  )
}

export default Item;