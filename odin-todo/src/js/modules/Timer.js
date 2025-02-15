
class Timer{ 
    
    #remainingTime = null;
    #interval = null;
    #timerStatus;

    constructor(estimatedTime){
        this.#remainingTime = estimatedTime;
        this.#timerStatus = false;
    }

    start(){
        console.log("pressed to start");
        this.#interval = setInterval(()=>{
            this.#remainingTime-=1;
            console.log(`Timer ${this.#interval} : ${this.#remainingTime}`)

        }, 1000);
        this.#timerStatus = true;
    }
    
    stop(){
        console.log("pressed to stop");
        clearInterval(this.#interval);
        this.#timerStatus = false;
    }

    getRemainingTime(){
        return this.#remainingTime;
    }

    getTimerStatus(){
        return this.#timerStatus;
    }
}



export default Timer;