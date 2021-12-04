import Task from './Task';
import './List.module.css'
function List(props){
return(
    
   <ul >
    {props.list.map(item=>(
       <li key={item.id}>
           <Task id={item.id} task={item.task} isCompleted={item.isCompleted} changeHandler={props.f}/>
            </li>
    ))}
    </ul>
        
         
);
    }
export default List;