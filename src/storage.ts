import { storage_int } from "./types";
import { Task } from "./task";

class Storage implements storage_int{
    constructor(private key: string = "tasks", private storage:[] = []){
    }
    readonly get = () =>{
        let json_obj = localStorage.getItem(this.key)
        if(!json_obj)return []
        let parsed:Task[] = JSON.parse(json_obj)
        return parsed
    }

    readonly put = <array>(tasks:array) =>{
        let stringified = JSON.stringify(tasks)
        localStorage.setItem(this.key, stringified)
    }

    readonly clear = () =>{
        localStorage.clear()
    }
}

export default new Storage()