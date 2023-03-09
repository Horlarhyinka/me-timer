import { Task } from "./task";
import { manager_type, time } from "./types";

class Manager implements manager_type{
    constructor(
        private tasks:(Task)[] = []
    ){

    }
    readonly addTask = (task:Task) =>{
         this.tasks.push(task)
        }
    readonly getTasks = () => this.tasks
    readonly getTask = (id: number) =>this.tasks.find(t=> t?.id === id)
    readonly removeTask = (id: number) =>{
        this.tasks = this.tasks.filter(t=>id !== t?.id)
    }
    readonly resetTasks = () =>{
        this.tasks = []
    }
    readonly getFreeTime = () =>{
        let t:time = {hr:0, min:0}
        this.getTasks().forEach(task =>{
            t.hr += task.duration.hr
            t.min += task.duration.min
        })
        return t
    }
}

export default new Manager()