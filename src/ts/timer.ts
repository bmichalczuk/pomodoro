let timer: any;

export const Timer = {
    start(callback: Function, ...args: any) {
        timer = setInterval(() => callback(...args), 1000);
    },
    stop() {
        clearInterval(timer);
        timer = null;
    }
};
