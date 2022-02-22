import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { useState } from "react"


function App() {
  const name = 'Matt'
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

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const changeToReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder } : task
      )
    )
  }


  return (
    <div className="container">
        <Header title='Task Tracker'/>
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={changeToReminder}/>
        ) : (
          'No Tasks To Show.'
        )}
    </div>
  );
}

export default App;
