import React, { ReactNode } from "react";
import RenderTime from "./time";
import { getCurrentTime } from "./getTime";

class Declare extends React.Component<{}> {
    render() { 
        return ( <h4>Tic Toc!!! you have {<RenderTime time={getCurrentTime()} />} </h4> );
    }
}
 
export default Declare;