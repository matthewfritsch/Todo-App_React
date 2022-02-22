import { FaTimes } from 'react-icons/fa'
import Tasks from './Tasks'

const Task = ({task, onDelete, toggleReminder}) => {

    return (

    <div className={task.reminder ? 'task reminder' : 'task'} onDoubleClick={() => toggleReminder(task.id)}>
        <h3>
            {task.text} 
            <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task