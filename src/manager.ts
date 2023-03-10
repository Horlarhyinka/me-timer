import { Task } from "./task";
import { manager_type, time } from "./types";
import storage from "./storage";

class Manager implements manager_type{
    constructor(
        private tasks:(Task)[] = []
    ){}

    readonly addTask = (task:Task) =>{
         this.tasks.push(task)
         storage.put(this.tasks)
        }
    readonly getTasks = () =>{
        this.tasks = storage.get()
        return this.tasks
    }
    readonly getTask = (id: number) =>{
        this.tasks = storage.get()
        return this.tasks.find(t=> t?.id === id)
    }
    readonly removeTask = (id: number) =>{
        this.tasks = this.tasks.filter(t=>id !== t?.id)
        storage.put(this.tasks)
    }
    readonly resetTasks = () =>{
        this.tasks = []
        storage.clear()
    }
    readonly getFreeTime = () =>{
        let t:time = {hr:0, min:0}
        this.getTasks().forEach(task =>{
            t.hr += task.duration.hr
            t.min += task.duration.min

            if(t.min > 59){
                let v = Math.floor(t.min/60)
                let rem = Math.floor(t.min%60)
                if(rem < 60){
                    t.min = rem
                }
                t.hr += v
            }
        })
        return t
    }
}

export default new Manager()