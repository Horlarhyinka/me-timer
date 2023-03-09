import React from 'react';
import './App.css';
import { Icon } from '@iconify/react';
import Declare from './declare';
import NewTask from './add-task';
import Tasks from './tasks';
import { Task } from './task';
import { time } from './types';
import { create_new_task } from './types';
import manager from './manager';
import { calcTimeLeft } from './getTime';

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const createNewTask:create_new_task = (info)=>{
    let free: time = calcTimeLeft(manager.getFreeTime())
    if((info.duration.hr + (info.duration.min/100)) > (free.hr + (free.min)/100) )return
    let id = Math.random()
    const newTask = new Task(id, info.title, info.startTime, info.duration)
    manager.addTask(newTask)
    setTasks([...manager.getTasks()])
  } 

  const deleteTask = (task: Task):void =>{
    manager.removeTask(task.id)
    setTasks([...manager.getTasks()])
  }

  const reset = ():void =>{
    manager.resetTasks()
    setTasks([...manager.getTasks()])
  }

  return (
    <div className="App">
      <h1>Me Timer <Icon icon="bi:alarm-fill" /></h1>
      <Declare />
      <NewTask createNewTask={createNewTask} />
      <Tasks removeTask={deleteTask} tasks={tasks} reset={reset} />
    </div>
  );
}

export default App;
