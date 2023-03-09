import { Task } from "./task"

export type time = {
    hr: number,
    min: number
}

export interface TaskInt{
    startTime: time,
    duration: time,
    isActive: ()=>boolean,
    id: number,
    title: string,
}

export interface manager_type{
    getTasks: ()=>(Task)[],
    addTask: (task: Task)=>void,
    removeTask: (id: number) =>void,
    resetTasks: () => void,
    getFreeTime: () => time
}

export type create_new_task = (info:{title: string, startTime: time, duration: time}) => void