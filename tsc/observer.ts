export enum EVENTS_LIST {
    changedWorkTime = 'changedWorkTime',
    changedBreakTime = 'changedBreakTime',
    startedTimer = 'startTimer',
    stopedTimer = 'stopTimer',
    changedRound = 'changedRound',
    resetTimer = 'resetTimer',
    changedCurrentTimeLeft = 'changedCurrentTimeLeft'
}

type EventCallback = (State: {}) => void;
type EventsCallbackArray = EventCallback[];
type EventsType = {[key in EVENTS_LIST]: EventsCallbackArray};

const EVENTS: EventsType = {
    [EVENTS_LIST.changedRound]: [() => {console.log(1)}],
    [EVENTS_LIST.changedBreakTime]: [],
    [EVENTS_LIST.changedWorkTime]: [],
    [EVENTS_LIST.startedTimer]: [],
    [EVENTS_LIST.stopedTimer]: [],
    [EVENTS_LIST.resetTimer]: [],
    [EVENTS_LIST.changedCurrentTimeLeft]: []
};

//fireEvent
export const fireEvent = (eventName: EVENTS_LIST) => {
    if(!EVENTS[eventName] || EVENTS[eventName].length < 1) {
        return;
    }
    EVENTS[eventName].forEach(async (cb: EventCallback) =>  await cb({}));
}

//addCallback
const addEventCallback = (eventName: EVENTS_LIST, cb: EventCallback) => {
    if(!EVENTS[eventName]) {
        return;
    }
    EVENTS[eventName].push(cb)
};
