import { createContext, useContext, useReducer, useEffect} from 'react'
import { Data, ActionType } from '../type/DataType';
import todoApi from '../api/todoApi';

const initTodos = createContext<Data[]>([]);
const initDispatch = createContext<React.Dispatch<ActionType>>(()=>{});

const TodoProvider = ({children}:{children:React.ReactNode}) => {
  const todoReducer = (prev:Data[],action:ActionType) => {
    switch(action.type){
        case 'todo/init': return [...action.todos];
        case 'todo/add': return [...prev,action.todo];
        case 'todo/delete': return prev.filter(todo => {
            return todo.id !== action.todo.id
        });
        case 'todo/update': return prev.map(todo => {
             return todo.id === action.todo.id ?
             {...todo,...action.todo} :
             {...todo}
        })
        default : return prev;
    }
  };

  const [todos, dispatch] = useReducer(todoReducer,[]);

  useEffect(() => {
    todoApi.getAll().then(result => {
        dispatch({type:'todo/init', todos:result, todo:{id:"",content:"",editing:false}});
    });
  },[]);
    
  return (
    <initTodos.Provider value={todos}>
        <initDispatch.Provider value={dispatch}>
            {children}
        </initDispatch.Provider>
    </initTodos.Provider>
  )
}

const useTodos = () => useContext(initTodos);
const useDispatch = () => useContext(initDispatch);

export { TodoProvider, useTodos, useDispatch };