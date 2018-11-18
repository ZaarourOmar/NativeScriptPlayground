import { Observable } from "tns-core-modules/data/observable";

export class DetailsVM extends Observable {

    private _message: string;

    constructor() {
        super();
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value)
        }
    }

    public onTap() {
        this.updateMessage();
     console.log("test");
    }

    private updateMessage() {
       this.message=new Date().toString();
    }
}
