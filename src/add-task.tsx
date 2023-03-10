import React from "react";
import { getRealTime } from "./getTime";
import RenderTime from "./time";
import { create_new_task, time } from "./types";
import { calcTimeLeft } from "./getTime";
import manager from "./manager";


interface NewTaskState {
    title: string,
    startTime: time,
    duration: time
}

type NewTaskProps = {
    createNewTask: create_new_task
}
 
class NewTask extends React.Component<NewTaskProps, NewTaskState> {

    state = {
        title: "",
        startTime: {hr:0, min: 0},
        duration: {hr:0, min: 0}
    }

    render() { 

      let ref = React.createRef<HTMLFormElement>()
        const hrs = []
        for(let i = 0; i < 24; i++){
          hrs.push(i)
        }
        const mins = []
        for(let i = 0; i < 60; i++){
          mins.push(i)
        }
        return ( <form ref={ref} >
            <p>Add new task</p>
            <div>you have {<RenderTime time={calcTimeLeft(manager.getFreeTime())} />} free</div>
            <div className="title" >
              <label htmlFor="title">Title</label>
              <input onChange={(e)=>{
                this.setState({title: e.target.value})
              }} type="text" name="title" />
            </div>
            <div>
              <label htmlFor="start" >start time (hrs/min)</label>
              <select name="startTime-hour" onChange={(e)=>{
                let v:number = parseInt(e.target.value)
                this.setState({startTime:{...this.state.startTime,hr:v}})
              }} >
                {
                  hrs.map(h =>h >= getRealTime().hr && <option key={h} >{h}</option>)
                }
              </select>
              <select name="startTime-minute" onChange={(e)=>{
                this.setState({startTime:{...this.state.startTime, min:parseInt(e.target.value)}})
              }}  >
              {
                  mins.map(m =>{
                    if(this.state.startTime.hr === getRealTime().hr){
                      return m > getRealTime().min && <option key={m} >{m}</option>
                    }
                  return <option key={m} >{m}</option>
                })
                }
              </select>
            </div>

            <div>
              <label htmlFor="duration" >duration (hrs/min)</label>
              <select name="duration-hour" onChange={(e)=>{
                this.setState({duration:{...this.state.startTime,hr:parseInt(e.target.value)}})
              }} >
                {
                  (()=>{
                    let hrs:number[] = []
                    let free = calcTimeLeft(manager.getFreeTime()).hr
                    for(let i = 0; i <= free; i++){
                      hrs.push(i)
                    }
                    return hrs.map(h =><option key={h} >{h}</option>)
                  })()
                }
              </select>
              <select name="duration-minute" onChange={(e)=>{
                this.setState({duration:{...this.state.duration, min:parseInt(e.target.value)}})
              }}  >
              {
                  (()=>{
                    let lmins: number[] = mins
                    let free = calcTimeLeft(manager.getFreeTime())
                    if(free.hr < 1){
                      let mins: number[] = []
                      for(let i = 0; i <= free.min; i++){
                        mins.push(i)
                      }
                      lmins = mins
                    }
                    return lmins.map(m =><option key={m} >{m}</option>)
                  })()
                }
              </select>
            </div>
            <button onClick={(e)=>{
              e.preventDefault()
              this.props.createNewTask({...this.state})
              ref.current?.reset()
              }} >Add</button>

        </form> );
    }
}
 
export default NewTask;