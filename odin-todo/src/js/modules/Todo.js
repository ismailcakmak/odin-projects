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

    /*
    render() {
        //convert logic object to DOM object
        let todoDom = DomConverter.convertTodo(this);
        //append callbacks to DOM object
        todoDom = this.appendCallbacks(todoDom);
        //return final DOM object
        return todoDom;
    }
    
    appendCallbacks(obj){
        this.#callbacks.forEach((callbackObj) => {
            obj.addEventListener(callbackObj.action, callbackObj.function);
        });
    }
    */
}

export default Todo;