import {State, CountdownMode} from "./types";

const state: State = {
    countdown: false,
    workTime: 25,
    breakTime: 5,
    currentMode: "work",
    timeLeft: 60*30,
};

export const setWorkTime = (time: number) => state.workTime = time;

export const setBreakTime = (time: number) => state.breakTime = time;

export const switchCurrentMode = (mode: CountdownMode) => state.currentMode = mode;

export const setTimeLeft = (timeLeft: number) => state.timeLeft = timeLeft;

const getState = () => state;

export default getState;
