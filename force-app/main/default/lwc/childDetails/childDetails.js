import { LightningElement,api } from 'lwc';

export default class ChildDetails extends LightningElement {
    name;
    age;
    @api nameToShow(nameMsg){
        this.name=nameMsg;
    }
    @api ageToShow(ageMsg){
        this.age=ageMsg;
    }
}