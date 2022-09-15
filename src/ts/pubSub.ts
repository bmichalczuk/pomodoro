import { AppEvent, AppEventsObj, State } from "./types"
import getState from "./state";
import {
    workTimeChanged, 
    breakTimeChanged, 
    timeLeftChanged, 
    countdownPaused, 
    countdownStarted, 
    modeChanged} from "./constants";

const appEvents: AppEventsObj = {
    [workTimeChanged] : [],
    [breakTimeChanged]: [], 
    [timeLeftChanged]: [],
    [countdownPaused]: [],
    [countdownStarted]: [],
    [modeChanged]: []
}

export const subsribeEvent = (event: AppEvent, callback: (state: State) => void) => {
    appEvents[event] = [...appEvents[event], callback];
};

export const fireEvent = (event: AppEvent) => {

    if(appEvents[event].length < 1) {
        return;
    }
    
    appEvents[event].forEach(callback => callback(getState()))
}