enum EVENTS_LIST {
    increasedBreakTime = 'increaseBreakTime',
    decreasedBreakTime = 'decreaseBreakTime',
    increasedWorkTime = 'increaseWorkTime',
    decreasedWorkTime = 'decreaseWorkTime',
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
    [EVENTS_LIST.decreasedBreakTime]: [],
    [EVENTS_LIST.increasedBreakTime]: [],
    [EVENTS_LIST.decreasedWorkTime]: [() => console.log(1), () => console.log(3), () => console.log(2)],
    [EVENTS_LIST.increasedWorkTime]: [],
    [EVENTS_LIST.startedTimer]: [],
    [EVENTS_LIST.stopedTimer]: [],
    [EVENTS_LIST.resetTimer]: [],
    [EVENTS_LIST.changedCurrentTimeLeft]: []
};

//fireEvent
const fireEvent = (eventName: EVENTS_LIST) => {
    if(!EVENTS[eventName] || EVENTS[eventName].length < 1) {
        return;
    }
    EVENTS[eventName].forEach(async (cb: EventCallback) =>  await cb({}));
}
fireEvent(EVENTS_LIST.decreasedWorkTime);

//addCallback
const addEventCallback = (eventName: EVENTS_LIST, cb: EventCallback) => {
    if(!EVENTS[eventName]) {
        return;
    }
    EVENTS[eventName].push(cb)
};
