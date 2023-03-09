import { getCurrentTime } from "./getTime";
import { time } from "./types";
import { TaskInt } from "./types";

export class Task implements TaskInt{
    constructor(
        readonly id: number,
        readonly title: string,
        readonly startTime: time,
        readonly duration: time
    ){}
    private formatTocalc(time: time):number{
        return time.hr + (time.min/100)
    }
    private timeDiff = this.formatTocalc(getCurrentTime()) - this.formatTocalc(this.startTime)
    readonly isActive = (): boolean => this.timeDiff > 0 && (this.timeDiff < this.formatTocalc(this.duration))
}