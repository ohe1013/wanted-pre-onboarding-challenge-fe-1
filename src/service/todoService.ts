import { TODO_URL } from "../data/url";
import {Todo, TodoData } from "../types/todo";
import axios from "./config/axios";

const TodoService = {

    getTodos :async () => {
      try {
        const res = await axios.get(TODO_URL);
          if (res.status === 200) {
            const todoList = res.data.data.map((item:Todo)=>item);
              return todoList
          }
      } catch (error) {}
    },
    getTodoById : async (id:string) => {
        try {
            if (id === undefined) {
              throw Object.assign(new Error())
            }
          const res = await axios.get(TODO_URL + `/${id}`);
          if (res.status === 200) {
            return res.data.data
          }
        } catch (error) {
        }
      },
    deleteTodo : async (id: string) => {
        if (!window.confirm("삭제하시겠습니까?")) return false;
    
        try {
          await axios.delete(TODO_URL + `/${id}`);
        } catch (error) {
          alert(error)
        }
      },
    postTodo: async (data:TodoData) => {
      try {
        const res = await axios.post(TODO_URL,data);
        if(res.status === 200){

        }
      } catch (error) {
        
      }
    },
    putTodo: async( id:string,data:TodoData)=> {
      try {
        const res = await axios.put(TODO_URL+`${id}`,data)
        if(res.status === 200){

        }
      } catch (error) {
        
      }

    }
}


export default TodoService