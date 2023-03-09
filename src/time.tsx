 import React from "react"
import { getCurrentTime } from "./getTime";
import { time } from "./types";

type RenderTimeProp = {time:time}
 
class RenderTime extends React.Component<RenderTimeProp> {

    render() { 
        let hr = this.props.time.hr
        let min = this.props.time.min
        return ( <div className="time" >{hr} hour{hr > 1?"s":""} and {min} minute{min > 1?"s":""}</div> );
    }
}
 
export default RenderTime ;