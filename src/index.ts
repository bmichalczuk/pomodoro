import "./index.scss";

import { workIcreaseBtn, workDecreaseBtn, breakDecreaseBtn, breakIcreaseBtn, startStopBtn } from "./ts/domNodes";
import { subsribeEvent, fireEvent } from "./ts/pubSub";
import { workTime, workTimeChanged , breakTimeChanged, breakTime, timeLeftChanged} from "./ts/constants";
import getState, { setWorkTime, setBreakTime, setCoundown } from "./ts/state";
import { State } from "./ts/types";
import {increaseBreakTime, increaseWorkTime, decreaseBreakTime, decreaseWorkTime, decreaseTimeLeft} from "./ts/eventListeners";
import {handleWorkValueDisplay, handleBreakValueDisplay, handleTimeLeftDisplay} from "./ts/domHandlers";
import {Timer} from "./ts/Timer";

subsribeEvent(workTimeChanged, [handleWorkValueDisplay]);
subsribeEvent(breakTimeChanged, [handleBreakValueDisplay]);
subsribeEvent(timeLeftChanged, [(state: State) => console.log(state.timeLeft), handleTimeLeftDisplay]);
workIcreaseBtn.addEventListener("click", increaseWorkTime);
workDecreaseBtn.addEventListener("click", decreaseWorkTime);
breakIcreaseBtn.addEventListener("click", increaseBreakTime);
breakDecreaseBtn.addEventListener("click", decreaseBreakTime);
startStopBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const {countdown} = getState();
    if(!countdown) {
        console.log("start");
        setCoundown(true);
        Timer.start(decreaseTimeLeft);
    } else {
        setCoundown(false);
        Timer.stop();
        console.log("stop");
    }
    
    

});



