import { useState } from 'react'
import { v4 as uuidv4} from 'uuid';
import todoApi from '../api/todoApi';
import { useDispatch, useTodos } from '../context/TodoProvider';

const Form = () => {
  const [ newContent, setNewContent ] = useState('');
  const dispatch = useDispatch();
  const todos = useTodos();

  const addTodo = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
        id: uuidv4(),
        content:newContent,
        editing:false
    };
    todoApi.post(newTodo).then(result => {
        dispatch({type:'todo/add', todo:newTodo, todos});
        setNewContent('');
    })
  };

  return (
    <form onSubmit={addTodo}>
        <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}    
        />
        <button>追加</button>
    </form>
  )
}

export default Form