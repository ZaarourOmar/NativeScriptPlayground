import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "data/observable-array";


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
    }

    private updateMessage() {
       this.message=new Date().toTimeString();
    }
}
