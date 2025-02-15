import Timer from "./modules/Timer"

test("timer counts", (done) => {
    const timer = new Timer(10);
    timer.start();

    const interval = setInterval(() => {
        let time = timer.getRemainingTime();
        console.log(time);
        if (time === 7) {
            clearInterval(interval);
            timer.stop();
            done();
        }
    }, 1000);
});