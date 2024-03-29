import {IIME_LEFT_DISPLAY,START_STOP_BTN, BREAK_TIME_DECREASE_BTN, BREAK_TIME_DISPLAY, BREAK_TIME_INCREASE_BTN, TIME_LEFT_INDICATOR, WORK_TIME_DECREASE_BTN, WORK_TIME_DISPLAY,WORK_TIME_INCREASE_BTN} from "./consts";

export const increaseWorkTimeBtn = document.querySelector(WORK_TIME_INCREASE_BTN) as HTMLButtonElement;
export const decreaseWorkTimeBtn = document.querySelector(WORK_TIME_DECREASE_BTN) as HTMLButtonElement;
export const workTimeDisplay = document.querySelector(WORK_TIME_DISPLAY);

export const increaseBreakTimeBtn = document.querySelector(BREAK_TIME_INCREASE_BTN) as HTMLButtonElement;
export const decreaseBreakTimeBtn = document.querySelector(BREAK_TIME_DECREASE_BTN) as HTMLButtonElement;
export const breakTimeDisplay = document.querySelector(BREAK_TIME_DISPLAY);

export const timeLeftIndicator = document.querySelector(TIME_LEFT_INDICATOR) as HTMLElement;
export const timeLeftDisplay = document.querySelector(IIME_LEFT_DISPLAY) as HTMLElement;
export const startStopBtn = document.querySelector(START_STOP_BTN) as HTMLButtonElement;
