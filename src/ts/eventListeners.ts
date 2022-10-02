import getState, { setBreakTime, setWorkTime } from "./state";
import { CountdownMode } from "./types";
import { timeStep, workTime, breakTime, workTimeChanged, breakTimeChanged } from "./constants";
import { fireEvent } from "./pubSub";

const changeModeTime = (
        callback: typeof setWorkTime | typeof setBreakTime, 
        eventName: typeof workTimeChanged | typeof breakTimeChanged, 
        newTime: number
    ) => {
    if (newTime > 60 || newTime < 5) {
        return;
    }
    callback(newTime);
    fireEvent(eventName);
};

export const increaseWorkTime = () => changeModeTime(
    setWorkTime, 
    workTimeChanged, 
    getState().workTime + timeStep
);
export const decreaseWorkTime = () => changeModeTime(
    setWorkTime, 
    workTimeChanged, 
    getState().workTime - timeStep
);
export const increaseBreakTime = () => changeModeTime(
    setBreakTime, 
    breakTimeChanged, 
    getState().breakTime + timeStep
);
export const decreaseBreakTime = () => changeModeTime(
    setBreakTime, 
    breakTimeChanged, 
    getState().breakTime - timeStep
);

