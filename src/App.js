import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskForm from './components/AddTaskForm'
import UpdateTaskForm from './components/UpdateTaskForm'
import Task from './components/Task'

import './App.css';

function App() {

  const [toDo, setToDo] = useState([
    { "id": 2, "title": "Task 2", "status": false },
    { "id": 1, "title": "Task 1", "status": true }
  ])

  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  // add task
  const addTask = () => {
    // console.log(newTask)
    if (newTask) {
      let num = toDo.length + 1
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([
        ...toDo,
        newEntry
      ])
      setNewTask('')
    }
  }

  // delete task
  const deleteTask = (id) => {
    // toDo.filter()
    let afterDelete = toDo.filter(task => task.id !== id)
    setToDo(afterDelete)
  }

  // mark as done or completed
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return (
          { ...task, status: !task.status }
        )
      }
      return task
    })
    setToDo(newTask)
  }

  // update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject)
    setUpdateData('')
  }


  // change task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry)
  }

  // cancel update
  const cancelUpdate = () => {
    setUpdateData('')
  }


  // remove all
  const removeAll = () => {
    setToDo([])
  }

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To do List App (ReactJS)</h2>
      <br />
      <br />

      {updateData && updateData ?
        (<>
        <UpdateTaskForm 
        updateData = {updateData}
        changeTask = {changeTask}
        updateTask = {updateTask}
        cancelUpdate = {cancelUpdate}
        />
        
        </>)
        :
        (
        <>
        <AddTaskForm
          toDo={toDo}
          newTask = {newTask}
          addTask = {addTask}
          setNewTask = {setNewTask}
          removeAll={removeAll}
        />

         
        </>
        )
      }

      {/* {Display todo} */}
      {toDo && toDo.length ? '' : 'No task...'}
     {
      <>
       <Task 
        toDo = {toDo}
        markDone = {markDone}
        setUpdateData = {setUpdateData}
        deleteTask={deleteTask}
      />
      </>
     }
    </div>
  );
}

export default App;
