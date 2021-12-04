import React, { useState } from 'react';

function TaskForm ({addTask}) {
    const [taskInput,setTaskInput] = useState('')

    function submitHandler(e) {
        e.preventDefault()
        addTask(taskInput)
        setTaskInput("")

    }

    function changeHandler(e) {
        setTaskInput(e.currentTarget.value)
        
    }

    return (
       <form style={{marginBottom:"15px", marginTop:"5px"}} onSubmit={submitHandler}>
           <input type="text" placeholder="Enter task ..." value={taskInput} onChange={changeHandler}/>
       </form>
    );
}

export default TaskForm;