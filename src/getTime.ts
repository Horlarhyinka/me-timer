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

export let calcTimeLeft = (exhausted: time):time =>({
     hr: getCurrentTime().hr - exhausted.hr,
     min: getCurrentTime().min - exhausted.min})


