import getState, {
  setBreakTime,
  setWorkTime,
  setTimeLeft,
  switchCurrentMode,
} from "./state";
import { CountdownMode } from "./types";
import {
  timeStep,
  workTime,
  breakTime,
  workTimeChanged,
  breakTimeChanged,
  countdownPaused,
  countdownStarted,
  timeLeftChanged,
  modeChanged,
} from "./constants";
import { fireEvent } from "./pubSub";

const changeModeTime = (
  callback: typeof setWorkTime | typeof setBreakTime,
  eventName: typeof workTimeChanged | typeof breakTimeChanged,
  newTime: number
) => {
  if (newTime > 60 || newTime < 5) {
    return;
  }
  callback(newTime);
  fireEvent(eventName);
};

export const increaseWorkTime = () =>
  changeModeTime(setWorkTime, workTimeChanged, getState().workTime + timeStep);

export const decreaseWorkTime = () =>
  changeModeTime(setWorkTime, workTimeChanged, getState().workTime - timeStep);

export const increaseBreakTime = () =>
  changeModeTime(
    setBreakTime,
    breakTimeChanged,
    getState().breakTime + timeStep
  );

export const decreaseBreakTime = () =>
  changeModeTime(
    setBreakTime,
    breakTimeChanged,
    getState().breakTime - timeStep
  );

export const handleStartStop = (countdownStatus: boolean) =>
  countdownStatus ? fireEvent(countdownPaused) : fireEvent(countdownStarted);

export const decreaseTimeLeft = () => {
  const {timeLeft: currentTime} = getState();
  if (currentTime > 0) {
    setTimeLeft(currentTime - 1);
    return fireEvent(timeLeftChanged);
  }
  const nextMode = getState().currentMode === "break" ? "work" : "break";
  switchCurrentMode(nextMode); //change
  const nextTimeLeft = getState()[`${nextMode}Time`] * 60;
  setTimeLeft(nextTimeLeft);
  fireEvent(timeLeftChanged);
  return fireEvent(modeChanged);
};
