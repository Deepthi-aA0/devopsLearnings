import { LightningElement } from 'lwc';

export default class DataRendering extends LightningElement {
    name
    isVisible=false;
    handleClick(){
        this.isVisible=true;
    }

    handleChange(event){
        this.name=event.target.value;
    }
    get helloMethod(){
        return this.name === "hello"
    }
}