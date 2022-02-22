import { useState } from "react"

const Tasks = () => {

    const [tasks, setTasks] = useState([
            {
                id: 1,
                text:'Drive to Santa Cruz',
                day: 'Feb 3rd at 11:00am',
                reminder: true,
            },
            {
                id: 2,
                text:'Go to Trader Joe\'s',
                day: 'Feb 21st at 1:30pm',
                reminder: false,
            },
            {
                id: 3,
                text:'Work Meeting',
                day: 'Mar 7th at 6:00am',
                reminder: false,
            },
        ])

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
        ))}  
    </>
  )
}

export default Tasks