import Timer from "./Timer.js";


class Todo{
    constructor(title,desciption,date,estimatedTime){
        this.title = title;
        this.desciption=desciption;
        this.date=date;
        this.estimatedTime=estimatedTime;
        this.timer = new Timer(Number(estimatedTime));
    }

    info() {
        console.log(JSON.stringify(this, null, 2));
    }

    get remainingTime(){
        return this.timer.getRemainingTime();
    }
}

export default Todo;