import getState, { setBreakTime, setWorkTime } from "./state";
import { CountdownMode } from "./types";
import { timeStep, workTime, breakTime, workTimeChanged, breakTimeChanged } from "./constants";
import { fireEvent } from "./pubSub";

export const increaseModeTime = (mode: CountdownMode, currentTime: number) => {
    if (currentTime >= 60 || currentTime <= 5) {
        return;
    }
    let callback: typeof setWorkTime | typeof setBreakTime;
    let eventName: typeof workTimeChanged | typeof breakTimeChanged;
    const newTime = currentTime + timeStep;

    switch(mode) {
        
        case workTime:
            callback = setWorkTime;
            eventName = workTimeChanged;
        case breakTime:
            callback = setBreakTime;
            eventName = breakTimeChanged;
            

    }
    callback(newTime);
    fireEvent(eventName);
};