import {State} from "./types";

const state: State = {
    workTime: 25,
    breakTime: 5,
    currentMode: "work",
    timeLeft: 60*30,
};

export const setWorkTime = (time: number) => state.workTime = time;

export const setBreakTime = (time: number) => state.breakTime = time;

export const switchCurrentMode = (mode: "work" | "break") => state.currentMode = mode;

export const setTimeLeft = (timeLeft: number) => state.timeLeft = timeLeft;

const getState = () => state;

export default getState;
