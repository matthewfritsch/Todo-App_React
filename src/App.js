import { useState, useEffect } from "react"

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTab, setShowAddTab] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=> {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json()
    return data
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    //update UI
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
        <Header onAdd={() => setShowAddTab(!showAddTab)} showAdd={showAddTab}/>
        {showAddTab && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={changeToReminder}/>
        ) : (
          'No Tasks To Show.'
        )}
    </div>
  );
}

export default App;
