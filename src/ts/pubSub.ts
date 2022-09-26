import { AppEvent, AppEventsObj, State, SubsribeCallback } from "./types"
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

export const subsribeEvent = (event: AppEvent, callback: SubsribeCallback) => {
    if(typeof callback === "function") {
       return appEvents[event] = [...appEvents[event], callback];
    } 
      return appEvents[event] = [...appEvents[event], ...callback];
};

export const fireEvent = (event: AppEvent) => {

    if(appEvents[event].length < 1) {
        return;
    }
    
    appEvents[event].forEach(callback => callback(getState()))
}