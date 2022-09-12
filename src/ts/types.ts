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


