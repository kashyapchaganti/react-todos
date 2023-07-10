import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import {Box, Typography} from '@mui/material';
// const initialTodos=[
//     {id:1, text:"walk", completed:false},
//     {id:2, text:"run", completed:false},
//     {id:3, text:"gym", completed:false},
//     {id:4, text:"die", completed:true},
//     {id:5, text:"sleep", completed:false}

// ]
const getInitialData =()=>{
    const data = JSON.parse(localStorage.getItem('toodos'));
    if(!data) return [];
    return data;
}
export default function TodoList(){
    const[todos,setTodos]=useState(getInitialData);
    const removeTodo= (id)=>{
        setTodos(todos.filter(t=>{
            if(t.id!=id){
                return t;
            }
        }))
    }
    useEffect(()=>{
        localStorage.setItem('toodos', JSON.stringify(todos))
    },[todos])
    const addTodo= (obj)=>{
        setTodos(prevTodos=>{
            return [...prevTodos, {...obj,id:crypto.randomUUID(),completed:false}]
        })
    }
    const checked=(id)=>{
        
        setTodos(prevTodos=>{
            return prevTodos.map(t=>{
                if(t.id==id){
                    return {...t,completed:!t.completed}
                }else{
                    return t
                }
            })
        })
    }
    return (
        <Box sx={{
            display:'flex',
            justifyContent:'Center',
            flexDirection:'column',
            alignItems:'center',
            m:3
        }}>
            <Typography variant="h2" component="h1" sx={{flexGrow:1}}>
                Todos
            </Typography>
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo=>{
                return (<div>


                <TodoItem todo={todo} remove= {removeTodo} key={todo.id} setChecked={checked}/>
                    
                    </div>
                )
                })}
                </List>
                <TodoForm add= {addTodo}/>
                </Box>
            )
        
    
}




