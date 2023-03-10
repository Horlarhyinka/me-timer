import React from "react"
import { Task } from "./task"
import RenderTime from "./time"
import { Icon } from '@iconify/react';
import dragula, {Drake} from "dragula"

interface TasksProps {
    tasks: Task[],
    removeTask: (task:Task) =>void,
    reset: () =>void
}

class Tasks extends React.Component<TasksProps > {
    private container = React.createRef<HTMLDivElement>()
    componentDidMount(): void {
        let drake: Drake
        if (this.container.current) {
         drake = dragula([this.container.current]);
          }
    }
    render() { 
        return this.props.tasks.length < 1?<h1 className="null" >you have no tasks yet</h1>:(<><div ref={this.container} >{
            this.props.tasks.map(t =>{
                return <div className="task-card" key={t.id} >
                    <p>{t.title}</p>
                    <div>starts at: <RenderTime time={t.startTime} />  ends in: <RenderTime time={t.duration} /></div>
                    <div className="wrapper" >
                        <Icon onClick={()=>this.props.removeTask(t)} icon="mdi:delete-empty" className="icn" />
                    </div>
                    </div>
            })
            }</div>
            <span onClick={()=>this.props.reset()} >{this.props.tasks.length > 1 && "clear tasks"}</span>
            </>  );
    }
}
 
export default Tasks;