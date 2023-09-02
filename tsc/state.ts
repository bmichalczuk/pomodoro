const defaultWorkTime = 45*60;
const defaultBreakTime = 15*60;

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
}

export const getState = () => state;