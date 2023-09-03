import {fireEvent, EVENTS_LIST} from "./observer";

const defaultWorkTime = 45;
const defaultBreakTime = 15;

const maxActionTime = 60;
const minActionTime = 5;

type Round = 'work' | 'break';

export type State = {
    workTime: number,
    breakTime: number,
    round: Round,
    running: boolean,
    currentTimeLeft: number
};

export const state: State = {
    workTime: defaultWorkTime,
    breakTime: defaultBreakTime,
    round: 'work',
    running: false,
    currentTimeLeft: defaultWorkTime
};

export const changeWorkTime = (newTime: number) => {
    if(newTime > maxActionTime || newTime < minActionTime) {
        return;
    }
    state.workTime = newTime;
    return fireEvent(EVENTS_LIST.changedWorkTime);
};

export const changeBreakTime = (newTime: number) => {
    if(newTime > maxActionTime || newTime < minActionTime) {
        return;
    }
    state.breakTime = newTime;
    return fireEvent(EVENTS_LIST.changedBreakTime);
};

export const changeRound = (newRound: Round) => {
    state.round = newRound;
    return fireEvent(EVENTS_LIST.changedRound);
};

export const changeRunningStatus = () => {
    state.running = !state.running;
    if(state.running) {
        return fireEvent(EVENTS_LIST.startedTimer);
    }
    return fireEvent(EVENTS_LIST.stopedTimer);
};

export const changeCurrentTimeLeft = (newCurrentTimeLeft: number) => {
    state.currentTimeLeft = newCurrentTimeLeft;
    return fireEvent(EVENTS_LIST.changedCurrentTimeLeft);
};

export const getState = () => state;

