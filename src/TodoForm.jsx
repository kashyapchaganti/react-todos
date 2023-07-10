import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function TodoForm({add}){
    const [item, setItem]= useState({text:""})
    const handleChange =(e)=>{
        const changedField= e.target.name;
        const changedValue = e.target.value;
        setItem((p)=>{
            return {...p,[changedField]:changedValue}
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        add(item);
        setItem({text:""})
    }
    return(
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="To-Do" variant="outlined" name="text" value={item.text} onChange={handleChange}/>
            <button>Add</button>
        </form>
        
    )
        
    
}
