import { workTime, breakTime } from "./constants";

import {
    workTimeChanged, 
    breakTimeChanged, 
    timeLeftChanged, 
    countdownPaused, 
    countdownStarted, 
    modeChanged} from "./constants";

export type State = {
    countdown: boolean,
    workTime: number,
    breakTime: number,
    currentMode: CountdownMode,
    timeLeft: number
}

export type AppEvent = typeof workTimeChanged 
    | typeof breakTimeChanged 
    | typeof timeLeftChanged
    | typeof timeLeftChanged
    | typeof countdownPaused
    | typeof countdownStarted
    | typeof modeChanged;

export type CountdownMode = typeof workTime | typeof breakTime;

export interface AppEventsObj {
    [workTimeChanged]: Array<Function> | [],
    [breakTimeChanged]: Array<Function> | [], 
    [timeLeftChanged]: Array<Function> | [],
    [countdownStarted]: Array<Function> | [],
    [countdownPaused]: Array<Function> | [],
    [modeChanged]: Array<Function> | [],
}

export type SubsribeCallback = ((state: State) => void) | (Array<(state: State) => void>)

