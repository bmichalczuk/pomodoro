export type State = {
    countdown: boolean,
    workTime: number,
    breakTime: number,
    currentMode: "work" | "break",
    timeLeft: number
}

export type AppEvent = "work-time-changed" 
    | "break-time-changed" 
    | "work-time-changed"
    | "time-left-changed"
    | "countdown-started"
    | "countdown-paused"
    | "mode-changed";

export type CountdownMode = "work" | "break";

export interface AppEventsObj {
    ["work-time-changed"]: Array<Function> | [],
    ["break-time-changed"]: Array<Function> | [], 
    ["work-time-changed"]: Array<Function> | [],
    ["time-left-changed"]: Array<Function> | [],
    ["countdown-started"]: Array<Function> | [],
    ["countdown-paused"]: Array<Function> | [],
    ["mode-changed"]: Array<Function> | [],
}

