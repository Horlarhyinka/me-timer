import { time } from "./types"

export let getCurrentTime = ():time =>{
    let date = new Date()
    let hr = 24 - date.getHours()
    let min = 60 - date.getMinutes()
    return {hr, min}
}

export let getRealTime = ():time =>{
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    return {hr, min}
}

export let calcTimeLeft = (exhausted: time):time =>{
    let calc: time = {hr:0, min: 0}
    let curr: time = getCurrentTime()
    calc.hr = curr.hr - exhausted.hr
    let min = curr.min - exhausted.min
    calc.min = min
    if(min < 0){
        calc.min = min + 60
        calc.hr -= 1
    }

    return calc
}


