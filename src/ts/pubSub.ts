import { AppEvent, AppEventsObj } from "./types"
import getState from "./state";

const appEvents: AppEventsObj = {
    "work-time-changed" : [],
    "break-time-changed": [], 
    "time-left-changed": [],
    "countdown-started": [],
    "countdown-paused": [],
    "mode-changed": []
}

export const subsribeEvent = (event: AppEvent, callback: Function) => {
    appEvents[event] = [...appEvents[event], callback];
};

export const fireEvent = (event: AppEvent) => {

    if(appEvents[event].length < 1) {
        return;
    }
    
    appEvents[event].forEach(callback => callback(getState()))
}