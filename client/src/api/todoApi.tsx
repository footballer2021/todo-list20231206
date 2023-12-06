import axios from 'axios';
import { Data } from '../type/DataType';

const ENDPOINT_URL = 'http://localhost:3001/data';

const todoApi = {
    async getAll(){
        const result = await axios.get(ENDPOINT_URL);
        return result.data
    },
    async post(todo:Data){
        const result = await axios.post(ENDPOINT_URL,todo);
        const addTodo = await JSON.parse(result.config.data)
        return addTodo;
    },
    async delete(todo:Data){
        await axios.delete(ENDPOINT_URL + '/' + todo.id);
    },
    async update(todo:Data){
        const result = await axios.put(ENDPOINT_URL + '/' + todo.id,todo);
        const updateTodo = await JSON.parse(result.config.data);
        return updateTodo;
    }
};

export default todoApi;