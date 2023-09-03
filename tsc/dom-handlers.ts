import {timeLeftDisplay, workTimeDisplay, breakTimeDisplay, timeLeftIndicator } from "./dom-nodes";

const changeTextValue = (node: Element) => (value: number) => node.textContent = String(value);

export const changeWorkTimeDisplay = changeTextValue(workTimeDisplay);
export const changeBreakTimeDisplay = changeTextValue(breakTimeDisplay);
export const changeCurrentTimeLeft = changeTextValue(timeLeftDisplay);

export const changeTimeLeftIndicator = (height: string) => timeLeftIndicator.style.height = height;



