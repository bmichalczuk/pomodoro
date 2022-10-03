import "./index.scss";

import { workIcreaseBtn, workDecreaseBtn, breakDecreaseBtn, breakIcreaseBtn } from "./ts/domNodes";
import { subsribeEvent, fireEvent } from "./ts/pubSub";
import { workTime, workTimeChanged , breakTimeChanged, breakTime} from "./ts/constants";
import getState, { setWorkTime, setBreakTime } from "./ts/state";
import { State } from "./ts/types";
import {increaseBreakTime, increaseWorkTime, decreaseBreakTime, decreaseWorkTime} from "./ts/eventListeners";
import {handleWorkValueDisplay, handleBreakValueDisplay} from "./ts/domHandlers";

subsribeEvent(workTimeChanged, [handleWorkValueDisplay]);
subsribeEvent(breakTimeChanged, [handleBreakValueDisplay]);

workIcreaseBtn.addEventListener("click", increaseWorkTime);
workDecreaseBtn.addEventListener("click", decreaseWorkTime);
breakIcreaseBtn.addEventListener("click", increaseBreakTime);
breakDecreaseBtn.addEventListener("click", decreaseBreakTime);




