import { workValueDisplay, breakValueDisplay, timeLeftDisplay } from "./domNodes"
import getState from "./state";
import { State } from "./types";
import { modeValue } from "./types";

const formatTime = (time: number) => {
    const minutes = Number((time/60).toFixed()) - 1;
    const seconds = time % 60 > 9 ? time % 60 : `0${time % 60}`;
    return `${minutes}:${seconds}`
}
export const handleBreakValueDisplay = (state: State) => breakValueDisplay.textContent = `${state.breakTime}`;
export const handleWorkValueDisplay = (state: State) => workValueDisplay.textContent = `${state.workTime}`;
export const handleTimeLeftDisplay = (state: State) => timeLeftDisplay.textContent = formatTime(state.timeLeft - 1);